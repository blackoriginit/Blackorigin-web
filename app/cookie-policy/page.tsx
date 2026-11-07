import LegalPage from "@/components/legal/LegalPage";

export const metadata = { title: "Cookie Policy | Black Origin" };

const PENDING = "Content pending confirmation of the website's actual cookie usage.";

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      intro="Whether and how the Black Origin website uses cookies."
      sections={[
        {
          heading: "What are cookies",
          paragraphs: [
            "Cookies are small data files that a website may store in a visitor's browser.",
          ],
        },
        { heading: "Cookies this website uses", paragraphs: [PENDING] },
        { heading: "Why we use them", paragraphs: [PENDING] },
        { heading: "Managing cookie settings", paragraphs: [PENDING] },
      ]}
    />
  );
}
