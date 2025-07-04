import '../home_styles/dynamicCards.css'

function DynamicCard({ imgURL, title, description }) {
    return (
        <article>
            <div class="article-wrapper">
                <figure>
                    <img src={imgURL} alt="card" />
                </figure>
                <div class="article-body">
                    <h2>
                        {title}
                    </h2>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </article>
    )
}

export default DynamicCard