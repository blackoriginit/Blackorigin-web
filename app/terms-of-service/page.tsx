import LegalPage from "@/components/legal/LegalPage";

export const metadata = { title: "Terms of Service | Black Origin" };

const PENDING = "Content pending team approval.";

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="The rules that apply when you visit or use the Black Origin website."
      sections={[
        { heading: "Acceptance of terms", paragraphs: [PENDING] },
        { heading: "Permitted and prohibited use", paragraphs: [PENDING] },
        { heading: "Intellectual property", paragraphs: [PENDING] },
        { heading: "User responsibilities", paragraphs: [PENDING] },
        { heading: "Disclaimers and limitation of liability", paragraphs: [PENDING] },
        { heading: "External links and updates to these terms", paragraphs: [PENDING] },
        { heading: "Contact us", paragraphs: [PENDING] },
      ]}
    />
  );
}
