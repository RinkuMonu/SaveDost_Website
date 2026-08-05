let cachedSession;
let sessionRequest;

export function getClientSession({ force = false } = {}) {
  if (!force && cachedSession !== undefined) {
    return Promise.resolve(cachedSession);
  }

  if (!force && sessionRequest) return sessionRequest;

  sessionRequest = fetch("/api/auth/session", { cache: "no-store" })
    .then((response) => (response.ok ? response.json() : { authenticated: false }))
    .catch(() => ({ authenticated: false }))
    .then((session) => {
      cachedSession = session;
      return session;
    })
    .finally(() => {
      sessionRequest = undefined;
    });

  return sessionRequest;
}

export function clearClientSession() {
  cachedSession = undefined;
  sessionRequest = undefined;
}
