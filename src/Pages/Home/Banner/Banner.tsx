import img1 from "../../../assets/images/slide1.jpg";
import img2 from "../../../assets/images/slide2.jpg";
import img3 from "../../../assets/images/slide3.jpg";
import img4 from "../../../assets/images/slide4.jpg";
// import img5 from "../../../assets/images/slide5.jpg";
// import img6 from "../../../assets/images/slide6.jpg";

import banner from "../../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div>
      <div className="carousel w-full h-[540px] mb-6">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={banner} className="w-full " />
          <div className="absolute flex items-center h-full gap-6   left-0 right-0 bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-5 pl-12 w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="text-[#fca129]"> Good </span>Service is our
                passion
              </h2>
              <p>
                No matter what the weather, no matter what the situation we are
                in, if we have the right perspective in life, life will always
                be beautiful!
              </p>
              <div className="flex items-center">
                <button className="btn mr-5 bg-[#82b440] text-white">
                  Special Offer
                </button>
              </div>
            </div>
          </div>


          <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide5" className="btn btn-circle bg-white">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle bg-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={img1} className="w-full " />
          <div className="absolute flex items-center h-full gap-6   left-0 right-0 bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-5 pl-12 w-1/2">
              <h2 className="text-3xl md:text-5xl font-bold">
                <span className="text-[#fca129]"> Good </span>Service is our
                passion
              </h2>
              <p>
                In a forgotten library, a mysterious book unveils ancient
                secrets, drawing readers into a realm where shadows intertwine
                with reality, weaving a spellbinding narrative of enigmas and
                intrigue.
              </p>
            </div>
          </div>
          <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide1" className="btn btn-circle bg-white">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle bg-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={img2} className="w-full " />
          <div className="absolute flex items-center h-full gap-6   left-0 right-0 bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-5 pl-12 w-1/2">
              <h2 className="text-3xl md:text-5xl  font-bold">
                <span className="text-[#fca129]"> Good </span>Service is our
                passion
              </h2>
              <p>
                Within an ancient tome, cryptic symbols weave tales of enigmatic
                realms. Readers brave its pages, unlocking mysteries that blur
                the line between reality and imagination, leaving them
                spellbound
              </p>
            </div>

          </div>
          <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide2" className="btn btn-circle bg-white">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle bg-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide4" className="carousel-item relative w-full">
          <img src={img3} className="w-full " />
          <div className="absolute flex items-center h-full gap-6   left-0 right-0 bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-5 pl-12 w-1/2">
              <h2 className="text-3xl md:text-5xl  font-bold">
                <span className="text-[#fca129]"> Good </span>Service is our
                passion
              </h2>
              <p>
                An enthralling novel immerses readers in captivating narratives,
                exploring diverse lives, love, and challenges. Through vivid
                characters and compelling plots, it evokes emotions, sparking
                introspection and profound connections
              </p>
            </div>

          </div>
          <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide3" className="btn btn-circle bg-white">
              ❮
            </a>
            <a href="#slide5" className="btn btn-circle bg-white">
              ❯
            </a>
          </div>
        </div>
        <div id="slide5" className="carousel-item relative w-full">
          <img src={img4} className="w-full " />
          <div className="absolute flex items-center h-full gap-6   left-0 right-0 bottom-0  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
            <div className="text-white space-y-5 pl-12 w-1/2">
              <h2 className="text-3xl md:text-5xl  font-bold">
                <span className="text-[#fca129]"> Good </span>Service is our <br />
                passion
              </h2>
              <p>
                In a world of emotions, a drama book unfolds human complexities,
                depicting love, betrayal, and <br /> resilience. Characters navigate
                life is twists, evoking empathy, and revealing the depths of the
                human spirit.
              </p>
              <div className="flex items-center">
                  <button className="uppercase border border-[#09BE51] bg-[#09BE51] hover:bg-transparent text-white py-2 text-lg px-6 hover:border hover:border-[#09BE51] hover:text-[#09BE51] duration-300 cursor-pointer">
                    Special Offer
                  </button>
                </div>
            </div>
            </div>
            
          </div>
          <div className="absolute flex justify-end gap-6 transform -translate-y-1/2 left-5 right-5 bottom-0">
            <a href="#slide4" className="btn btn-circle bg-white">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle bg-white">
              ❯
            </a>
          </div>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur aperiam sint eveniet minima temporibus sapiente omnis eos dolore. Eligendi quibusdam saepe eveniet? Laboriosam repellendus odio quisquam dolorum maiores alias pariatur dignissimos amet provident. Iusto nemo obcaecati nam pariatur, magnam veritatis similique praesentium distinctio doloremque aliquam ducimus. Nesciunt beatae eaque tempore incidunt illum voluptatem facilis id velit eligendi fugiat mollitia maxime adipisci, praesentium voluptas est? Quidem reprehenderit obcaecati corrupti magnam accusamus. Expedita ducimus quasi natus pariatur, tempora atque soluta ipsum maxime unde facere vel perspiciatis. Aliquam quas error consectetur aut sunt nam omnis mollitia laborum fugiat obcaecati iste eius cupiditate, dolor modi voluptatibus eligendi debitis repellendus temporibus dignissimos at praesentium. Provident molestias excepturi, iste esse neque labore consequatur magnam laudantium maxime repellat! Dolore, laboriosam sunt fugit enim a quia incidunt, commodi eos ab officiis quos ex sint consectetur obcaecati quis molestias voluptatum ratione? Eos eius repellendus quod debitis reprehenderit quasi reiciendis necessitatibus, corrupti, sed possimus dignissimos at nihil nemo? Repudiandae recusandae totam facilis ad doloremque nam vel atque natus modi inventore culpa nesciunt omnis placeat quasi esse ab officiis quod voluptatum dicta amet, similique dolores non. Cumque sed, harum consequuntur eligendi quisquam perferendis aperiam voluptates. Dolore sed nemo eum ex delectus, eveniet velit vitae, cumque corrupti nulla vero beatae obcaecati id et quasi tempore, aliquid doloremque harum perspiciatis magni incidunt autem iste. Itaque consequatur sequi impedit esse, possimus incidunt molestias consequuntur. Ab ex saepe accusantium commodi aut omnis, suscipit, quae tempore, laboriosam repellat voluptate velit totam soluta culpa error maiores ad. Ducimus ratione necessitatibus aliquid, maxime porro laudantium iure non quaerat alias cumque inventore ipsum sint consequuntur placeat recusandae perferendis ipsam, accusamus nemo dolorum autem eius. Nobis, amet tenetur. Quasi odit expedita excepturi praesentium accusamus debitis! Quo unde beatae voluptates in provident sapiente consequuntur necessitatibus ducimus, minus veritatis. Mollitia sunt illum doloremque fuga aperiam totam obcaecati dolore, nostrum rem autem cupiditate asperiores perspiciatis quo distinctio blanditiis placeat, accusamus temporibus inventore nulla ex reprehenderit? At adipisci quibusdam dolorem fuga nisi minima corrupti quae. Adipisci itaque quas ut, tenetur ab hic fuga excepturi corrupti voluptatibus iste alias molestiae, aliquid dignissimos officiis est perspiciatis. Tempora repudiandae vitae assumenda, minima sit quidem earum molestiae dicta recusandae fugiat, possimus minus consectetur fugit qui. Aliquam iste recusandae perspiciatis expedita labore, nihil quo culpa fugiat sapiente quos hic esse iusto tempora nisi deserunt veniam et inventore dolore rem. Enim voluptatem, omnis ipsum pariatur qui quibusdam perferendis repellat maiores deleniti aperiam aliquid velit animi harum, inventore iste similique? Ut nobis magnam hic aliquam labore nisi, minima odio perferendis asperiores totam, quaerat quasi porro amet cupiditate repellat earum aspernatur, nemo inventore sed rem? Repellat delectus ipsam quod fuga voluptates architecto numquam, iure ea est sunt suscipit quo error fugit quas quae veniam deleniti dolore officiis perspiciatis modi aperiam odit adipisci? Ipsa perspiciatis reiciendis labore fugiat vel? Nam ipsum velit placeat ipsam eum aperiam saepe, nisi incidunt praesentium temporibus quos aliquam voluptates omnis mollitia dicta et aspernatur vero molestiae officia assumenda. A expedita iure debitis fuga temporibus totam culpa ducimus, id ea repudiandae, quibusdam veritatis cupiditate dolorum eligendi laborum blanditiis officia suscipit saepe repellendus necessitatibus eaque tempore nam deleniti. Beatae blanditiis saepe autem ea voluptatibus impedit expedita officiis nemo, fugit rem quisquam! Molestias quo aliquam, sapiente alias saepe accusamus dicta numquam! Expedita eligendi praesentium dolores, quo libero, necessitatibus corporis non porro ullam illum enim alias doloribus nostrum placeat tempore recusandae, nulla ex harum odit incidunt modi reprehenderit? Possimus nam unde cumque sed ducimus. Modi, similique maiores? Ex delectus provident, numquam incidunt placeat debitis ipsum ullam voluptas odio atque, temporibus maxime aliquid officia inventore. Inventore, dicta accusantium! In consequuntur ipsa voluptate, repudiandae explicabo laborum odit vero? Error culpa autem officia, consequatur obcaecati aliquid consectetur ab ipsa, enim repellat cum odio laboriosam eum vitae et ratione tenetur corrupti velit, dolor nam. Quo, iste magni sed omnis aliquid tempore ducimus. Facere architecto tempora a atque aliquid error saepe velit corrupti labore possimus quis dignissimos, nam asperiores id maxime aspernatur! Exercitationem, distinctio quos officiis illo, vel ut adipisci mollitia quae optio corrupti cumque. Animi itaque porro velit quidem ab, nemo ipsum tenetur ipsa! Eius omnis deleniti harum eligendi explicabo odit tempore eaque qui neque laborum quia iste perferendis, nemo facilis repudiandae a voluptatibus ea dolores! Cum, expedita atque. Eligendi molestiae itaque sequi blanditiis doloremque optio, ipsam omnis minima. Nesciunt vel, molestiae repudiandae iste pariatur reiciendis accusamus temporibus suscipit, sunt quas reprehenderit modi. Dolor neque debitis quis cumque itaque odio sint esse doloremque vero ut ipsum minima ducimus minus modi temporibus quisquam, accusantium et, earum veniam nobis pariatur quo! Natus magnam est odit laborum. Hic nobis, sunt, iure cumque velit eos deserunt fugiat sequi qui quos dolorum quia aperiam earum, porro voluptas error quidem perspiciatis facere odio natus. Excepturi vitae explicabo et libero veritatis ratione, illum corporis! Explicabo nulla at nesciunt. Tempora molestiae quisquam quos modi iure porro ab nostrum aliquam consequuntur eveniet voluptas totam eligendi animi, rerum praesentium! Illo veniam officiis, ut adipisci harum labore voluptate dolore porro non perferendis asperiores consectetur sit hic unde voluptates modi aspernatur, animi eos earum exercitationem laboriosam maxime quod sint et! Optio, doloribus perferendis amet tempore officiis aut repellendus, at, error delectus sapiente dolores quod sunt quaerat accusamus quibusdam adipisci repudiandae. Maxime voluptatibus quibusdam sequi minus praesentium nam. Dolorum officia accusamus placeat unde esse tempore nihil quaerat atque repudiandae. Molestiae, facilis neque quaerat laboriosam tempore, similique, recusandae commodi ducimus quidem eius natus! Reprehenderit incidunt asperiores vitae cumque quisquam soluta necessitatibus eius tenetur earum consequatur delectus rerum, illum saepe at fugiat omnis pariatur? Fugiat deleniti aut doloribus? Cumque vitae at sint corrupti quibusdam minus illo doloremque commodi, illum assumenda voluptatibus nobis sapiente. Aliquid, cumque ut. Fuga dolore eos adipisci dicta rem cupiditate temporibus nisi cumque molestiae ullam facilis alias quasi voluptate illum ea explicabo rerum cum nobis debitis vitae voluptatibus, doloribus est porro veritatis! Provident suscipit id nisi odit vel quaerat sequi! Esse totam voluptatem doloremque mollitia nemo! Nobis ipsa sequi aspernatur tempore nostrum nulla soluta inventore rem maiores aliquid explicabo, omnis possimus quibusdam architecto molestias dolor. Odit voluptatem, quam excepturi est consectetur deleniti optio accusamus voluptatibus eius aperiam ullam voluptas repellat veritatis, cum ab laborum. Veritatis, mollitia. Amet blanditiis dignissimos ipsum ducimus rerum! Eum quasi, doloremque corporis deleniti aperiam est dicta molestias rem velit magnam rerum ut cupiditate nostrum in animi, optio neque, vero pariatur corrupti commodi nemo. Est numquam, magni nam minus alias officia consectetur. Perspiciatis mollitia saepe possimus magni in deleniti est obcaecati ratione quam iure iusto, ea quas nam porro aspernatur libero aliquid numquam assumenda sapiente vel neque dicta cumque voluptatum? Aliquid et odit repellat ex nulla harum alias quia, consectetur saepe veritatis dicta fuga culpa neque natus tempora, ad exercitationem repellendus pariatur! Maxime magni amet, repudiandae eveniet perspiciatis repellat. Odio, amet perferendis id itaque inventore consequatur sed provident repellat necessitatibus magnam reiciendis commodi adipisci natus consectetur velit beatae omnis delectus, fuga temporibus animi qui aperiam quasi dolore sequi. Qui aliquam eveniet soluta suscipit iusto porro libero dicta nemo, quaerat odio corrupti mollitia dolores molestiae repudiandae voluptas cum, quae rerum doloribus laudantium magni! Eos molestias sed natus cupiditate. Illum ratione ea ab eligendi tenetur voluptas voluptatum quo saepe quos cumque modi totam molestiae odit quisquam quam nisi officiis sequi, consequatur sunt sapiente ex tempore, accusantium blanditiis animi. Accusantium minus excepturi aperiam animi officiis optio magni esse sint est nam illo, totam labore ullam sed? Numquam magnam asperiores quidem inventore beatae. Quasi, repellendus aliquid. Architecto consectetur animi magni in sit enim laudantium aperiam possimus blanditiis, nobis voluptatum explicabo cum voluptates incidunt fugiat praesentium exercitationem ipsum. Iure atque, saepe vitae id dolor velit nulla debitis nostrum ad sequi in dignissimos suscipit neque numquam maiores quibusdam corrupti, rem nesciunt consectetur fugit animi. Rerum quisquam magnam, ab numquam harum perferendis velit maiores sed quod ad qui ipsam ipsa vitae voluptatum repellendus corrupti provident itaque atque molestiae architecto, veniam sapiente. Et, eaque amet itaque libero reprehenderit odio neque, quas veniam sequi quisquam consectetur tempore laboriosam maiores magnam dolor recusandae minus nemo provident similique? Aspernatur vitae, ducimus illum quos doloribus debitis rem aliquid dicta. Est doloribus dolore corporis cupiditate atque necessitatibus reprehenderit dolorem quaerat similique aliquid aspernatur quia, recusandae fuga adipisci natus ipsam delectus sit, praesentium non. Fuga hic quas quidem consequuntur tempore omnis minus consequatur repellat, beatae vitae cum pariatur maiores! Tenetur aliquam quidem nesciunt soluta architecto odit error illum enim id! Quam quis sapiente numquam nostrum amet inventore rem dolorum rerum tempore repudiandae iusto laborum eum corrupti dignissimos laboriosam adipisci, architecto pariatur odit enim cum optio distinctio ex minima! Inventore amet, facere modi sequi praesentium cumque voluptatem facilis dolorem consequatur eum rem deserunt dolorum repellendus deleniti fuga numquam et quisquam alias ipsum, quam fugiat. Libero praesentium voluptatibus esse, vero vel unde nemo perferendis perspiciatis qui sapiente enim assumenda voluptates rerum, alias reiciendis veniam sit saepe optio culpa architecto. Corrupti iusto laborum officia nobis non dicta magnam reiciendis repellat quia dignissimos quaerat, explicabo excepturi necessitatibus nulla, laudantium placeat facilis aliquid odit voluptates! Aut perspiciatis, necessitatibus sint modi velit neque dolorem. Expedita impedit eius numquam eligendi voluptatem minus saepe molestias corrupti magnam tempore. Suscipit rerum explicabo debitis ab voluptatum et dolore nulla incidunt, tenetur, fuga ipsam repudiandae placeat vero error culpa molestiae esse. Eos corrupti iure, iusto facere officia reprehenderit velit aliquid nostrum vero eum quod voluptas, placeat cupiditate possimus necessitatibus! Minus velit repudiandae saepe consequuntur eveniet in et aspernatur quam nobis provident laudantium vel cumque maxime inventore ad, voluptatum architecto reiciendis illum vero commodi eos dolorem quos molestiae. Debitis numquam dignissimos minima eveniet assumenda, accusamus molestiae quam inventore distinctio soluta sint velit dolore. Id quisquam veritatis nemo similique nobis dolorum distinctio labore ad non! Temporibus magni autem, in cupiditate est exercitationem nemo quasi! Sed quos omnis laudantium molestiae esse debitis! Tempore cum velit quod obcaecati voluptatum, corporis consectetur iusto, vero asperiores fuga iste maxime deleniti iure nesciunt at dolorum excepturi ducimus voluptatem eos voluptate corrupti nemo qui dicta. Eligendi voluptates non ipsum reiciendis sed sapiente repellendus dolor similique, atque cupiditate optio distinctio cumque, dolorum autem illum consectetur exercitationem, debitis odio! Consequuntur, magni velit provident vero ut temporibus asperiores, quod tenetur unde nisi exercitationem maiores doloribus fugiat ipsum doloremque quam iusto sunt repudiandae laboriosam ex ad odio! Modi quibusdam ea atque blanditiis eos quidem esse, asperiores voluptate explicabo saepe dolore mollitia suscipit velit rem animi veritatis. Ut facere sunt repudiandae, soluta eaque, nemo nobis deserunt alias, voluptas iusto reprehenderit voluptatum. Dignissimos adipisci delectus doloremque dolores labore ducimus explicabo maxime quos laborum illum quisquam id omnis eius aliquid quis eligendi consectetur fugit totam eum laboriosam, vel molestiae expedita quod. Doloremque molestiae, quo amet omnis similique dolorem alias porro molestias exercitationem sequi ipsam dolores sed! Voluptate ipsum minus consequatur, officia in dolores rem nostrum culpa est sed at! Itaque blanditiis quo, voluptatum harum totam fugit et placeat, dolor excepturi consectetur fugiat velit quidem? Ipsam ut provident obcaecati ea possimus vel repellendus asperiores ab veritatis error esse iste deserunt soluta, ad aspernatur ipsum ipsa? Fugiat architecto laudantium perferendis quasi, blanditiis eaque? Atque neque unde, mollitia alias, nisi maxime illum sequi eveniet repellat est laudantium officiis deserunt. Quaerat fuga dignissimos ratione quam possimus. Quisquam illo totam vero dolore ea consequuntur culpa tempora maiores iusto cupiditate nulla a sunt autem repellendus doloremque cumque, nihil consectetur dolores itaque dolorum hic nobis? Aspernatur dignissimos libero quaerat eveniet quasi quam! Dolor ducimus omnis voluptate dicta porro voluptas similique iusto, necessitatibus at maiores recusandae esse deleniti perspiciatis architecto, quis pariatur natus error eius dolorum nihil repudiandae illum nobis, quasi reiciendis? Ullam, iure quidem sequi impedit odit repudiandae enim tempora ex, illum nostrum aliquid in saepe suscipit possimus atque cupiditate error vitae assumenda beatae ipsum incidunt dolorum amet nulla dicta. Ullam, inventore et. Eos ipsa in sed a laborum ipsum sapiente molestias iusto ratione nobis similique facere delectus asperiores, voluptate cumque. Nisi soluta deleniti ratione voluptate hic nostrum aspernatur animi. Numquam qui quos aspernatur quisquam perspiciatis voluptas hic provident, consequuntur temporibus repudiandae est non, nisi aliquid incidunt necessitatibus aut quas consectetur labore fuga? Consequuntur ducimus fugiat alias neque esse, beatae ab. Tempore expedita amet quod vitae molestiae doloribus et voluptatem nihil vel!</p>
    </div>
  );
};

export default Banner;
