import LegalPage from "@/components/legal/LegalPage";

export const metadata = { title: "Cookie Policy | Black Origin" };

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="Whether and how the Black Origin website uses cookies. Last updated: 20 November 2026."
      sections={[
        {
          heading: "What are cookies",
          paragraphs: [
            "Cookies are small data files that a website may store in a visitor's browser. They can be used to remember preferences, keep a user signed in, measure traffic, or support advertising.",
          ],
        },
        {
          heading: "Cookies this website uses",
          paragraphs: [
            "We do not currently place cookies on your device through www.blackoriginit.com. In particular, we do not use analytics cookies, advertising cookies, or cross-site tracking cookies.",
            "Visiting this site or submitting a contact form does not set a cookie for advertising or profiling purposes. Any information you type into a form is held in your browser while you complete it and is not stored as a cookie.",
          ],
        },
        {
          heading: "Why we use them",
          paragraphs: [
            "Because we do not use cookies, we do not use them to remember your preferences, measure how the site is used, personalise content, or show targeted advertising.",
            "If we introduce cookies in the future, we will update this page to explain what they do, how long they last, and whether they are strictly necessary. Where required, we will ask for your consent before setting non-essential cookies.",
          ],
        },
        {
          heading: "Third-party cookies",
          paragraphs: [
            "We do not embed third-party analytics or advertising services that set cookies on this website. However, if you follow a link to an external website, such as a social media platform, that website may set its own cookies.",
            "Those cookies are controlled by the third party and are covered by that website's cookie and privacy policies, not this one.",
          ],
        },
        {
          heading: "Managing cookie settings",
          paragraphs: [
            "You can block or delete cookies at any time using your browser settings. Because this website does not rely on cookies for its core functions, blocking cookies should not prevent you from browsing it or using our enquiry forms.",
            "If you have a question about cookies on this website, email hr@blackoriginit.com or write to Black Origin IT, Bangladesh.",
          ],
        },
      ]}
    />
  );
}
