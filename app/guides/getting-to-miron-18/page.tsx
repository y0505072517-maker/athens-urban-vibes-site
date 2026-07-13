import { articleBySlug, guideMetadata } from "../articles";
import { GuideArticle } from "../GuideArticle";

const article = articleBySlug("getting-to-miron-18");

export const metadata = guideMetadata(article);

export default function Page() {
  return <GuideArticle article={article} />;
}
