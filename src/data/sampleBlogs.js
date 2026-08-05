export const sampleBlogs = [
  {
    id: "sample-1",
    slug: "simple-guide-to-paying-utility-bills-online",
    title: "A Simple Guide to Paying Utility Bills Online",
    category: "Bill Payments",
    categoryName: "Bill Payments",
    created_at: "2026-07-20T10:00:00.000Z",
    image: "/blog/blog1.png",
    author: "SaveDost Team",
    short_description:
      "Understand the basic checks that can help you pay supported household bills clearly and confidently.",
    content: `
      <p>Online bill payment can save time, but it is important to review the information shown before confirming a transaction. A few simple checks can reduce avoidable mistakes.</p>
      <h2>Keep your bill details ready</h2>
      <p>Use the customer number, account number or consumer ID shown on your latest bill. Enter it carefully and select the correct provider and service area.</p>
      <h2>Review before paying</h2>
      <p>When bill details are fetched, confirm the customer name, billing period, due date and amount. If something looks incorrect, stop and check the details with your provider.</p>
      <h2>Save the transaction reference</h2>
      <p>After payment, keep the confirmation and transaction reference until the provider reflects the payment. Avoid repeating a payment immediately if the status is still processing.</p>
    `,
  },
  {
    id: "sample-2",
    slug: "how-to-recharge-your-mobile-with-confidence",
    title: "How to Recharge Your Mobile with Confidence",
    category: "Recharge Guides",
    categoryName: "Recharge Guides",
    created_at: "2026-07-16T10:00:00.000Z",
    image: "/blog/blog2.png",
    author: "SaveDost Team",
    short_description:
      "Learn what to check when selecting a mobile number, operator and recharge plan.",
    content: `
      <p>A mobile recharge is usually completed quickly, which makes it especially important to verify the number and plan before payment.</p>
      <h2>Check the mobile number</h2>
      <p>Read the number again before continuing. A successful recharge sent to the wrong number may not be reversible.</p>
      <h2>Confirm operator and circle</h2>
      <p>Make sure the detected or selected operator and service circle match the mobile connection. If the number was recently ported, verify the current operator.</p>
      <h2>Read the plan details</h2>
      <p>Compare validity, data, calls and other benefits. Plan availability and benefits are controlled by the operator and may change.</p>
    `,
  },
  {
    id: "sample-3",
    slug: "safer-habits-for-everyday-digital-payments",
    title: "Safer Habits for Everyday Digital Payments",
    category: "Payment Safety",
    categoryName: "Payment Safety",
    created_at: "2026-07-11T10:00:00.000Z",
    image: "/blog/blogbg.png",
    author: "SaveDost Team",
    short_description:
      "Practical habits that can help protect your account, OTPs and payment information.",
    content: `
      <p>Digital payments are convenient, but safe habits remain essential. Always pause when a message or caller pressures you to act immediately.</p>
      <h2>Keep OTPs and credentials private</h2>
      <p>Never share an OTP, password, PIN or card security code with another person. Genuine support teams should not ask for these details.</p>
      <h2>Use trusted access points</h2>
      <p>Open SaveDost through the official website or app. Avoid unknown links received through messages, advertisements or social media.</p>
      <h2>Review transaction alerts</h2>
      <p>Check bank alerts and account activity. If you notice an unfamiliar transaction, contact your bank and SaveDost support promptly.</p>
    `,
  },
];

export function getSampleBlog(slug) {
  return sampleBlogs.find((blog) => blog.slug === slug) || null;
}
