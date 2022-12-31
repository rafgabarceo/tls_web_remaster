export default function SecondaryArticle({article}) {
    return (
        <p>--- secondary - <span dangerouslySetInnerHTML={{__html: article.title.rendered}}/></p>
    );
}