import { workData } from "@/lib/data";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { ArrowRight } from "lucide-react";

const Work = () => {
  return (
    <section>
      <div className="sectionContainer">
        <h3 className="sectionTitle">our work</h3>
        <h1 className="sectionSubTitle">
          Latest projects we <br /> have done
        </h1>

        <Carousel className="workCarousel">
          <CarouselContent className="workCarouselContent">
            {workData.map((work, index) => (
              <CarouselItem key={index} className="workCarouselItem">
                <div className="workCarouselItemCard">
                  <img
                    src={work.img}
                    alt={work.title}
                    className="workCarouselItemCardImg "
                  />
                  <div className="workCarouselItemCardTexts">
                    <h2>{work.type}</h2>
                    <p>{work.title}</p>
                    <div className="mx-auto w-max bg-international-orange-engineering text-white p-3 rounded-full ">
                      <ArrowRight size={32} />
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className={"workCarouselPrevBtn "} />
          <CarouselNext className={"workCarouselNextBtn "} />
        </Carousel>
      </div>
    </section>
  );
};

export default Work;
