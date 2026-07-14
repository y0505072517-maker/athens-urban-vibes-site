import { articleBySlug, guideMetadata } from "../articles";
import { GuideArticle } from "../GuideArticle";

const article = articleBySlug("ancient-agora-athens");

export const metadata = guideMetadata(article);

export default function Page() {
  return <GuideArticle article={article} />;
}
