import type { CollectionEntry } from "astro:content";
import * as React from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

type Props = { listImages: CollectionEntry<"project">["data"]["otherImage"] };

const MyLightbox = (props: Props) => {
  const [index, setIndex] = React.useState(-1);

  return (
    <>
      <div class="mt-4 grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-3">
        {props.listImages?.map((val, index) => (
          <div
            onClick={() => {
              setIndex(index);
            }}
            class="group relative flex h-32 w-auto cursor-pointer overflow-clip rounded border md:w-32 lg:w-auto"
          >
            <img
              class="h-full w-full object-cover transition duration-500 group-hover:scale-125"
              src={val.src}
              alt="Other images"
              decoding="async"
              loading="lazy"
            />
            <div class="absolute left-0 top-0 flex h-full w-full items-center justify-center text-transparent transition-colors duration-500 group-hover:text-black">
              <svg
                fill="currentColor"
                stroke-width="0"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                height="3rem"
                width="3rem"
                style={{ overflow: "visible" }}
              >
                <path d="M637 443H519V309c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v134H325c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h118v134c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V519h118c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8zm284 424L775 721c122.1-148.9 113.6-369.5-26-509-148-148.1-388.4-148.1-537 0-148.1 148.6-148.1 389 0 537 139.5 139.6 360.1 148.1 509 26l146 146c3.2 2.8 8.3 2.8 11 0l43-43c2.8-2.7 2.8-7.8 0-11zM696 696c-118.8 118.7-311.2 118.7-430 0-118.7-118.8-118.7-311.2 0-430 118.8-118.7 311.2-118.7 430 0 118.7 118.8 118.7 311.2 0 430z"></path>
              </svg>
            </div>
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
