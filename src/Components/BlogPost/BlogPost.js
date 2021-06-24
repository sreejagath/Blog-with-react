import React,{useState,useEffect} from 'react'
import './BlogPost.css'
import Card from '../UI/Card/Card'
import Images from '../../BlogPostImages/Images.jpeg'
import blogPost from '../../data/blog.json'

function BlogPost(props) {
    const [post, setPost] = useState({})
    useEffect(()=>{
        const postId = props.match.params.postId;
        const post = blogPost.data.find(post=>post.id == postId)
        setPost(post);
    },post)
    return (
        
            <div className="blogPostContainer">
                <Card>
                    <div className="blogHeader">
                    <span className="blogCategory">Featured</span>
                    <h1 className="postTitle">{post.blogTitle}</h1>
                <span className="postedby">Posted on 24 June,2021 by Sree</span>
                <div className="imageContainer">
                    <img src="https://www.digitalvidya.com/wp-content/uploads/2019/03/personal-blog.jpg" alt="Post Image" />
                </div>
                <div className="postContent">
                <h3>Post Title</h3>
<p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos veritatis laudantium ut nesciunt alias soluta! Saepe est dignissimos labore dolores voluptatum ea consectetur fugiat iusto ex quae culpa tenetur illo deserunt nihil animi, soluta at id nemo et iste! Autem, natus illo aspernatur ex expedita voluptates voluptate in enim dolor explicabo atque ducimus distinctio nostrum laborum minus optio porro animi et perferendis. Neque sapiente inventore voluptatum voluptatem mollitia alias! Quidem eaque facilis, maxime assumenda rem numquam fugiat ullam voluptate magnam, aliquam perferendis autem reprehenderit natus id voluptates nam repellendus est? Alias officiis, quasi illum amet voluptas pariatur deserunt! Tempora, expedita itaque quidem aliquid vero iusto! Fugit distinctio, neque quidem recusandae sit at unde aspernatur, expedita cumque perferendis atque laborum tenetur corporis illo porro beatae sed error a voluptatum reiciendis! Aperiam sed maiores, fuga, modi aspernatur adipisci numquam a enim libero asperiores accusantium consectetur ad iste repudiandae ducimus totam nobis quasi dolor animi! Quam incidunt exercitationem doloremque cupiditate accusantium repellendus laudantium obcaecati laboriosam soluta porro numquam ex, ea optio nemo in at, non iusto quo quasi dolores ducimus aut. Repellendus maxime iure nobis deserunt earum labore adipisci accusamus, est, placeat esse, tenetur nemo voluptatum veniam distinctio eum vero ipsum velit! Consequuntur nostrum nobis iure neque laudantium quaerat voluptates totam dignissimos nemo dolore voluptatibus itaque molestiae soluta, mollitia omnis earum aut optio repudiandae porro incidunt nihil delectus. Reprehenderit, rem quisquam suscipit aspernatur nemo nisi quia rerum officiis minus aliquam atque eum iure optio blanditiis aliquid voluptas saepe expedita fugit asperiores enim! Laudantium praesentium expedita deserunt! Adipisci provident officiis incidunt nulla quidem cum velit ex rem ab animi, distinctio, in temporibus enim maxime dolore inventore quisquam excepturi laudantium voluptate! Rem saepe blanditiis recusandae earum aliquam atque obcaecati, minima porro! Sapiente consequatur dolores et optio eaque accusamus, itaque assumenda beatae possimus. Quos natus placeat iusto id dicta? Iusto excepturi repudiandae eum deleniti dolorum nisi, enim doloribus magni laborum alias, obcaecati fugit? Error inventore asperiores est sint modi distinctio animi vero. Enim atque natus illum repellendus molestias esse recusandae, consectetur dolorum necessitatibus ullam quaerat blanditiis? Vel, aperiam velit molestiae ipsum praesentium delectus, commodi amet necessitatibus asperiores eaque nobis voluptate officiis ullam alias ad sint officia quam repellat maiores ipsam qui quod voluptates accusantium blanditiis! Porro inventore ex quidem soluta nisi et, repellendus deleniti quisquam quia animi? Vitae sunt, a accusamus corporis, cupiditate odit omnis laudantium rerum expedita, voluptatem sint nisi obcaecati voluptas modi error. Similique, quidem. Maxime in, non quia numquam quasi eligendi voluptate soluta eos culpa, sapiente modi? Est debitis unde nobis? Possimus repellendus nesciunt eaque! Dicta ratione obcaecati voluptas illo modi expedita eligendi doloremque, porro rerum in! Totam neque commodi est sunt, eligendi reiciendis. Dolorem deserunt rerum odit aut suscipit, voluptatibus voluptates animi, quae minus unde, quidem earum. Eaque provident, sed inventore iusto asperiores adipisci eligendi amet beatae cum perspiciatis quisquam? Animi accusantium impedit doloribus minima praesentium voluptatem fugiat sit dicta reprehenderit dolorum libero, dolorem mollitia voluptas? Delectus repellat praesentium possimus dignissimos dolor itaque asperiores consequatur quibusdam repudiandae sit id nihil ut expedita cupiditate voluptate, blanditiis ratione! Inventore, commodi! Minus veritatis earum adipisci beatae vel reiciendis laborum dolorem consequuntur maxime, recusandae doloremque? Officia, iure qui sit molestiae blanditiis commodi dignissimos eveniet fuga maxime quo at, adipisci quas deleniti in delectus debitis aliquam veritatis expedita tempore nam culpa id quidem et illum. Cupiditate quod velit labore a maiores. Blanditiis, alias natus. Neque ab explicabo laborum, vitae quisquam atque maxime repellat ipsam perferendis cupiditate commodi molestias iure quis ex animi alias, minus eum quos libero sapiente ut a. Impedit eaque dolore aliquid, porro labore fugit vel ad quisquam ut atque error adipisci commodi praesentium consectetur.</p>
                </div>
                </div>
                </Card>
            </div>
        
    )
}

export default BlogPost
