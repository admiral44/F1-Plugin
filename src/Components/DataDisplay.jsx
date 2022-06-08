import ForgeUI, {
    Fragment, Text, useProductContext, useState, User
} from '@forge/ui';
import api, { route } from "@forge/api";

const fetchCommentsForIssue = async (issueIdOrKey) => {
    const res = await api
      .asUser()
      .requestJira(route`/rest/api/3/issue/${issueIdOrKey}/comment`);
  
    const data = await res.json();
    return data.comments;
  };

export const DataDisplay = () => {

    const context = useProductContext();

    const [comments] = useState(async () => await fetchCommentsForIssue(context.platformContext.issueKey));
  
    // console.log(`Number of comments on this issue: ${comments.length}`); 
    // console.log(`Author ID : ${comments[0].author.accountId}`); 

    return (
        <Fragment>
            <Text>{`Number of comments on this issue : ${comments.length}`}</Text>
            <User accountId={comments[0].author.accountId} />
            <Text>{comments[0].body.content[0].content[0].text}</Text>
        </Fragment>
    )
}