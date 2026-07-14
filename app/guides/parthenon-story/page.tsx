import { articleBySlug, guideMetadata } from "../articles";
import { GuideArticle } from "../GuideArticle";

const article = articleBySlug("parthenon-story");

export const metadata = guideMetadata(article);

export default function Page() {
  return <GuideArticle article={article} />;
}
