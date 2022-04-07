import { FileRow } from "./style";
import { FaInfoCircle, FaPencilAlt, FaTrashAlt } from 'react-icons/fa';

const FileInfo = ({
  nameFile,
  author,
  date,
  info,
  onClick1,
  onClick2,
}) => {
  return (
    <FileRow>
      <label id="label1">{nameFile}</label>
      <label id="label2">{author}</label>
      <label id="label3">{date}</label>
      <div id="button1" style={{cursor:"pointer"}} type="button" onClick={onClick1}> <FaPencilAlt /> </div>
      <div id="button2" style={{cursor:"pointer"}} type="button" onClick={onClick2}> <FaTrashAlt /> </div>
    </FileRow>
  );
};

export default FileInfo;
