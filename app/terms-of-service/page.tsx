import LegalPage from "@/components/legal/LegalPage";

export const metadata = { title: "Terms of Service | Black Origin" };

export default function TermsOfServicePage() {
  return (
    <LegalPage
      title="Terms of Service"
      intro="The rules that apply when you visit or use the Black Origin website. Last updated: 20 November 2026."
      sections={[
        {
          heading: "Acceptance of terms",
          paragraphs: [
            "By visiting or using www.blackoriginit.com, you agree to these Terms of Service. If you do not agree, please do not use this website.",
            "These terms apply to the website only. Any software development, consulting, or other services we provide are governed by a separate written agreement or statement of work.",
          ],
        },
        {
          heading: "Use of the website",
          paragraphs: [
            "You may use this website only for lawful purposes and in a way that does not interfere with its operation or with other people's use of it.",
            "You must not attempt to gain unauthorised access to the site, introduce malicious code, scrape or overload the site with automated requests, misrepresent your identity, or use the site to distribute unlawful, harmful, or infringing material.",
          ],
        },
        {
          heading: "Information you submit",
          paragraphs: [
            "When you contact us or submit a project enquiry, you agree to provide accurate and complete information and to update us if it changes. You are responsible for the content of your messages and for ensuring that you have the right to share any material you send.",
            "Submitting an enquiry does not create a client relationship, guarantee acceptance of a project, or constitute an offer. We may choose which enquiries we respond to and may request further information before providing a proposal.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "The text, design, graphics, logos, and other content on this website are owned by Black Origin IT or our licensors and are protected by intellectual property laws.",
            "You may view and print pages for your own reference, but you may not copy, reproduce, modify, distribute, or commercially exploit any part of the site without our written permission. The Black Origin name and logos may not be used without permission.",
          ],
        },
        {
          heading: "Third-party links",
          paragraphs: [
            "This website may link to third-party websites, including social media platforms. Those sites are operated by their own providers and are subject to their own terms and privacy policies.",
            "We are not responsible for the content, availability, or practices of third-party websites, and linking to them does not mean we endorse them.",
          ],
        },
        {
          heading: "No professional advice",
          paragraphs: [
            "Content on this website is provided for general information about our company and services. It is not legal, financial, security, or technical advice, and you should not rely on it as a substitute for professional advice specific to your situation.",
            "Any technical recommendations, estimates, or project timelines shared with you are subject to the terms of the applicable service agreement.",
          ],
        },
        {
          heading: "Disclaimers and limitation of liability",
          paragraphs: [
            "We aim to keep this website accurate and available, but we provide it on an 'as is' and 'as available' basis. We do not guarantee that it will always be available, error-free, or free from harmful components.",
            "To the fullest extent permitted by law, Black Origin IT is not liable for indirect, incidental, special, or consequential losses, or for loss of data, profit, or business arising from your use of or inability to use this website. Nothing in these terms excludes liability that cannot lawfully be excluded.",
          ],
        },
        {
          heading: "Changes and availability",
          paragraphs: [
            "We may update, add, or remove content on this website at any time. We may also temporarily suspend access for maintenance or security reasons.",
            "We may revise these Terms of Service from time to time. The updated version will be posted on this page with a new 'Last updated' date, and it will apply from the date it is published.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These Terms of Service are governed by the laws of Bangladesh, without affecting any mandatory consumer rights you may have under the law of your place of residence.",
          ],
        },
        {
          heading: "Contact us",
          paragraphs: [
            "If you have a question about these Terms of Service, email hr@blackoriginit.com or write to Black Origin IT, Bangladesh.",
          ],
        },
      ]}
    />
  );
}
