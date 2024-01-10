// import { useAuth } from '@/app/context/AuthContext';
import styles from './Upvotes.module.css';
// import { gql, useMutation, useQuery } from 'urql';
import { ThumbsUp } from 'react-feather';
import clsx from 'clsx';
// import { useEffect, useState } from 'react';
import { PostUpvote } from '@core/postUpvote';
import { revalidatePath } from 'next/cache';
import Upvotes from './Upvotes';

// interface Props {
//   postId: string;
//   className?: string;
// }

// const TotalUpvotesQuery = gql`
//   query TotalUpvotes($postId: String!, $visitorId: String) {
//     totalPostUpvotes(postId: $postId, visitorId: $visitorId) {
//       total,
//       recentVisitorUpvotes
//     }
//   }
// `

// const CreateOrUpdateUpvoteQuery = gql`
//   mutation CreateOrUpdateUpvote($postId: String!, $visitorId: String!, $exists: Boolean!) {
//     createOrUpdateUpvote(postId: $postId, visitorId: $visitorId, exists: $exists) {
//       votes
//     }
//   }
// `

// const MAX_UPVOTES = 15;

// const Upvotes = ({ postId, className }: Props) => {
//   const { visitorId } = useAuth();
//   const [visitorUpvotes, setVisitorUpvotes] = useState(0);
//   const [totalUpvotesData] = useQuery({
//     query: TotalUpvotesQuery,
//     variables: {
//       postId,
//       visitorId
//     },
//     pause: !!visitorUpvotes
//   });
//   const totalUpvotes = totalUpvotesData?.data?.totalPostUpvotes?.total || 0;
//   const recentVisitorUpvotes = totalUpvotesData?.data?.totalPostUpvotes?.recentVisitorUpvotes || 0;

//   const [result, createOrUpdateUpvote] = useMutation(CreateOrUpdateUpvoteQuery);

//   console.log(`Upvotes`, totalUpvotes, recentVisitorUpvotes, result, totalUpvotesData);

//   useEffect(() => {
//     if (!!recentVisitorUpvotes) {
//       setVisitorUpvotes(recentVisitorUpvotes);
//     }
//   }, [recentVisitorUpvotes])

//   return (
//     <button className={clsx(styles.wrapper, className)} onClick={() => {
//       createOrUpdateUpvote({ postId, visitorId, exists: !!recentVisitorUpvotes });
//       setVisitorUpvotes((v) => v + 1)
//     }}>
//       <ThumbsUp size="1.5rem" />
//       {totalUpvotesData.fetching ? 'loading...' : visitorUpvotes}
//       {visitorUpvotes >= MAX_UPVOTES && 'MAX'}
//     </button>
//   )
// }

interface Props {
  postId: string;
  visitorId: string;
  className?: string;
}

const UpvotesContainer = async ({ postId, visitorId, className }: Props) => {
  let { votes } = await PostUpvote.getTotalPostUpvotes(postId);
  let recentVotes = await PostUpvote.getRecentUpvotesByVisitorId(postId, visitorId);

  async function incrementVotes() {
    'use server';

    await PostUpvote.createOrUpdate(postId, visitorId, recentVotes?.id);

    revalidatePath('/[postSlug]', 'page');
  }

  return <Upvotes votes={votes} className={className} incrementVotes={incrementVotes} />
}

export default UpvotesContainer;