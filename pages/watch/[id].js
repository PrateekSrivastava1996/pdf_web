import { useRouter } from "next/router";

import { WatchPage } from "../../components/Common/index";

const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <WatchPage id={id} />
    </>
  );
};

export default Post;
