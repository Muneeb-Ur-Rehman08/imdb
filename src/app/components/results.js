export default function Results({ results }) {

  return results?.map((item) => {

    return <div>{item?.original_title}</div>;
    
  });
}
