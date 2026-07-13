import { articleBySlug, guideMetadata } from "../articles";
import { GuideArticle } from "../GuideArticle";

const article = articleBySlug("athenian-sky-retreat-rooftop");

export const metadata = guideMetadata(article);

export default function Page() {
  return <GuideArticle article={article} />;
}
