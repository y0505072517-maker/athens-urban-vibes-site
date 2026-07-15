import { articleBySlug, guideMetadata } from "../articles";
import { GuideArticle } from "../GuideArticle";

const article = articleBySlug("birth-of-democracy");

export const metadata = guideMetadata(article);

export default function Page() {
  return <GuideArticle article={article} />;
}
