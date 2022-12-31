export default function PrimaryArticle({article}) {
    return (
        <p>-- primary - <span dangerouslySetInnerHTML={{__html: article.title.rendered}}/></p>
    );
}