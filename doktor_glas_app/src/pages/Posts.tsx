export const utdrag = {
  id: '1',
  subject: '12e juni',
  date: '1905-06-12',
  creationDate: '2024-06-12',
  content:
    '12 juni. Jag har aldrig sett en sådan sommar. Rötmånadshetta sedan midten af maj. Hela dagen står ett tjockt töcken af damm alldeles stilla öfver gatorna och torgen.',
  image: '../images/drglas.jpg'
};

type DiaryEntry = {
  subject: string;
  id: string;
  date: string;
  creationDate: string;
  content: string;
  image: string;
};

type Props = {
  diaryEntry: DiaryEntry;
};

const Posts = () => {
  return <Entry diaryEntry={utdrag} />;
};
const Entry = ({ diaryEntry }: Props) => {
  return (
    <>
      <h2>{diaryEntry.subject}</h2>
      <h3>{`Dr Glas: utdrag ${diaryEntry.id}`}</h3>
      <h3>{diaryEntry.creationDate}</h3>
      <hr />
      <p>{diaryEntry.content}</p>
      <img src={diaryEntry.image} alt="foo" />
    </>
  );
};

export default Posts;
