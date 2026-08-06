module.exports = {
  apps: [
    {
      name: "savedost.com",
      script: "npm",
      args: "start", // next start
      cwd: "/home/finuniqu/public_html/Sevenuniques_Utility_Website",
      env: {
        NODE_ENV: "production",
        PORT: 3000,
      },
    },
  ],
};

