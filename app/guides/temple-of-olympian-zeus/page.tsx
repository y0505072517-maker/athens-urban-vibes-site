import { articleBySlug, guideMetadata } from "../articles";
import { GuideArticle } from "../GuideArticle";

const article = articleBySlug("temple-of-olympian-zeus");

export const metadata = guideMetadata(article);

export default function Page() {
  return <GuideArticle article={article} />;
}
