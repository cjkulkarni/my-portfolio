import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';


export default async function BlogPost({ params,}: { params: Promise<{ slug: string }>;}) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), 'src/content/blog', `${slug}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);
  const processedContent = await remark().use(html).process(content);

  return (
    <div className="px-6 py-16 max-w-3xl mx-auto prose prose-blue">
      <h1>{data.title}</h1>
      <p className="text-gray-500 text-sm mb-4">{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: processedContent.toString() }} />
    </div>
  );
}
