import type { CollectionEntry } from "astro:content";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Props = { listImages: CollectionEntry<"project">["data"]["otherImage"] };

const MyLightbox = (props: Props) => {
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      <div class="flex flex-wrap space-x-2 mt-4">
        {props.listImages?.map((val, index) => (
          <div
            onClick={() => {
              setIndex(index);
            }}
            class="flex w-32 h-32 p-2 border cursor-pointer overflow-clip"
          >
            <img
              class="object-cover w-full h-full hover:scale-125 transition duration-500"
              src={val.src}
              alt="Other images"
              decoding="async"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      {/* @ts-ignore */}
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={props.listImages?.map((val) => ({ src: val.src }))}
      />
    </>
  );
};

export default MyLightbox;
