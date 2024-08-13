import React from 'react'
import projectdata from '@/data/projectdata'
import Image from 'next/image'
type Props = {
    searchParams : {[key: string] : string | string[] | undefined }
}
const WorkPage = ({searchParams}:Props) => {
    const id = Number(searchParams._id)
    const fetchedData = (projectdata.find((data:any)=>data.id===id))
  return (
    <div className='text-center flex flex-col items-center justify-center  mt-16 md:mt-0 tracking-tighter'> 

      <header className=' flex flex-col items-center justify-center text-left md:text-center'>
        <Image className='w-[100vw] h-56 object-cover' objectFit='cover' width={720} height={640} alt='an image of white' src={'https://images.pexels.com/photos/1115804/pexels-photo-1115804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'}></Image>
        <h1 className=' relative w-[85vw] md:w-[70vw] mt-4 font-bold text-3xl '>{ fetchedData?.title + " : " + fetchedData?.desc || "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, vero!"} 
          <br />
          {/* <div className='left-0 w-52 h-1 bg-neutral-800 mt-2'></div> */}
        </h1>
      </header>
      <article className='flex flex-col text-balance items-left justify-center w-[85vw] md:w-[70vw] text-left mt-24 tracking-tight'>
        <h3 className='blog-heading'>WHat i want?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos suscipit similique a delectus perspiciatis architecto ea quam sint. Tempora ipsam magni ipsum vero suscipit cumque dolore ut nisi quisquam doloremque. Sequi, natus tempora ipsum consequuntur rem sapiente reiciendis illo, esse excepturi atque totam nobis debitis quibusdam mollitia nisi possimus! Nostrum deleniti quia beatae deserunt saepe eius quas nisi modi molestiae aspernatur omnis accusantium laboriosam sapiente, nemo quis eum voluptatibus impedit veniam adipisci perferendis dolorum enim ea quae? Eligendi quis odit magnam sequi repudiandae exercitationem, nam ipsum autem totam maiores, quam quo perferendis minus inventore alias nemo laudantium quisquam culpa soluta? Fuga culpa cumque, harum ex quae quod consequuntur veritatis mollitia temporibus natus enim labore rem quos provident numquam nam perferendis! Minima voluptas ab sequi asperiores ad soluta hic incidunt ratione iusto suscipit ducimus earum illo, perspiciatis fuga. Facilis accusantium, aliquam maiores est nam iste aliquid nulla saepe quasi repellat, commodi in numquam libero pariatur excepturi omnis. Odit repellendus accusantium debitis similique possimus esse illo excepturi quasi, rerum explicabo? Ullam, voluptate? Necessitatibus, molestias debitis illo doloremque aperiam perferendis corporis assumenda id voluptatem cupiditate eius aut velit libero cumque. Porro voluptatum veritatis, ipsa, eius ratione pariatur asperiores vitae odio sed debitis quaerat? Cum nemo quam eius fugit repellat facere perspiciatis rem provident architecto beatae. Dolorem illo rem quod atque nostrum saepe. Aperiam similique nisi libero veniam praesentium officiis nobis? Officia at excepturi enim modi neque nemo ad et odio maiores saepe quia reiciendis, ex voluptatem inventore consequuntur alias sapiente iste rerum sequi? Distinctio excepturi quos placeat ea nostrum eius! Explicabo, eligendi officiis corrupti excepturi nobis corporis aspernatur esse cumque incidunt veritatis dolore quae quo ratione aliquid illo? Quo, minus consequatur error consectetur dolorum commodi obcaecati quas excepturi voluptatibus deserunt vero qui enim voluptatum aliquid ut quis quaerat necessitatibus eum fugiat corrupti in.</p>
        <br />
        <h3 className='blog-heading'>WHat i have?</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt tempore enim neque id cum in asperiores atque, nihil nesciunt illo officiis quisquam doloremque veritatis magnam, aliquam distinctio corporis ab accusamus fuga. Odit molestias suscipit nobis expedita quibusdam ducimus ut. Repellat quo hic est facere ea! Non rem architecto sapiente quod laborum quae voluptate dolores, tempora sunt totam. Corrupti iure nulla unde suscipit omnis tenetur. Reprehenderit quaerat obcaecati reiciendis. Eveniet animi sunt assumenda? Similique soluta consequuntur aspernatur dolor dolore? Unde porro voluptas est voluptatem. Quos impedit corrupti nam alias, adipisci ducimus quaerat debitis excepturi qui a incidunt odit est quis architecto, ipsa velit iste repudiandae? Qui illo vero omnis quos vitae ab doloribus ea quasi fuga, nulla, necessitatibus velit deserunt ut sed error! Porro tempora modi veritatis, totam soluta illo rem vero animi ad maxime. Aperiam nihil facilis modi omnis hic impedit quisquam, dolorum, officiis possimus perferendis quam unde consequatur libero tempore obcaecati? In amet magni atque sint culpa id consequuntur repellat non exercitationem sed repudiandae fuga quia ea ut odio perspiciatis reprehenderit inventore minus provident, saepe possimus. Repudiandae, dolor. Laboriosam amet est nobis rem eveniet iure quas commodi tempora saepe. Eum dolor expedita, esse obcaecati voluptate sequi porro cum enim.</p>
        <br />
        <h3 className='blog-heading'>WHat i get?</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa sapiente tempora necessitatibus iusto molestias est eius, perspiciatis cumque quod eum, labore maiores eos ratione cupiditate, modi numquam porro reiciendis a.</p>

        

      </article>
        
        </div>
  )
}

export default WorkPage