// import { customToast, isImageFiles } from "../../../utilities/global";
import { customToast, isImageFiles } from "../../../utilities/helper-function";
import FileInput from "../../ui/Input/file-input";

const Media = ({ formdata, setFormdata, validation }) => {
  const { display, cover, image } = formdata

  const onChange = (e, name) => {
    const newFD = { ...formdata }

    const value = e.target.files

    if (isImageFiles(value)) {
      if (name === 'cover' || name === 'display') {
        newFD[name] = [value[0]]
      }

      if (name === 'image') {
        const imgArray = [...newFD[name]];

        for (const element of value) {
          imgArray.push(element);
        }

        newFD[name] = imgArray;
      }

      setFormdata(newFD);
    } else {
      customToast('warn', 'Select Valid Images', 3000);
    }
  }

  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[16px] gap-y-[24px]">
        <div>
          <FileInput buttonLabel='upload display image' label='Display Image' name='display' onChange={onChange} validation={validation && display.length <= 0} value={display} />
        </div>

        <div>
          <FileInput buttonLabel='upload cover Image' label='Cover Image' name='cover' onChange={onChange} validation={validation && cover.length <= 0} value={cover} />
        </div>

        <div>
          <FileInput buttonLabel='upload gallery Images' label='Gallery Images' multi name='image' onChange={onChange} validation={validation && image.length <= 0} value={image} />
        </div>
      </div>
    </div>
  )
}

export default Media;
