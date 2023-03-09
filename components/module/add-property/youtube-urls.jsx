import Image from "next/image";

import { trash } from "../../../static-img-urls";
import { customToast, isYoutubeUrl} from "../../../utilities/helper-function";
import InputField from "../../ui/Input";

const YoutubeUrls = ({ setSocialLinks, links }) => {

  const addMore = () => {
    const add = [...links];

    if (add.length < 8) {
      add.push({ url: '' });
      setSocialLinks(add);
    }
  }

  // Removing item from the social array
  const remove = (index) => {
    const removeItem = [...links];

    removeItem.splice(index, 1);
    setSocialLinks(removeItem);
  }

  // Checking Links
  const socialLinksWarnings = (name = undefined, e = undefined, checkforDuplicate = undefined) => {
    if (checkforDuplicate && name) {
      customToast('warn', 'Duplicate Link', 1500);

      return false
    }
    else if ((!isYoutubeUrl(e) && e !== '')) {
      customToast('warn', 'Wrong Url', 1500);

      return false
    }

    return true
  }

  // OnChange social link function
  const onChange = (e, name = undefined, index = undefined) => {
    const fd = [...links];

    const value = e.target.value;

    const checkforDuplicate = !name && fd && fd.length > 0 && fd.find((item) =>
      item.url === value
    )

    if (socialLinksWarnings(index, value, checkforDuplicate)) {
      fd[index].url = value;
      setSocialLinks(fd)
    }
  }

  return (
    <div>

      <div className="grid gap-[16px]">
        {
          links.map((items, index) => (
            <div key={items.url}>
              <InputField index={index} label='URL' onChange={onChange} placeholder='https://www.youtube.com' value={items.url}>
                <button className="absolute right-0 top-0 bottom-0 grid items-center justify-center w-[44px] border-l-[1px] border-border-primary" onClick={() => remove(index, items)} type="button">
                  <span className="relative inline-block w-[15px] h-[16px]">
                    <Image alt="Icon" layout="fill" src={trash} />
                  </span>
                </button>
              </InputField>
            </div>
          ))
        }

      </div>

      {
        links.length < 8 ?
          <button className="text-[14px] underline text-text-tertiary mt-[10px] font-medium" onClick={() => addMore()} type="button">
            <span className="text-[16px]">{'+'}</span> {'Add More'}
          </button>
          :
          undefined
      }
    </div>
  )
}

export default YoutubeUrls;
