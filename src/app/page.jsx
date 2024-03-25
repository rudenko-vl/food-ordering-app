import Hero from "@/components/layout/Hero";
import HomeMenu from "@/components/layout/HomeMenu";
import SectionHeaders from "@/components/layout/SectionHeaders";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenu />
      <section id="about" className="text-center my-16">
        <SectionHeaders subHeader={"Our story"} mainHeader={"About Us"} />
        <div className="max-w-md mt-4 text-gray-500 mx-auto flex flex-col gap-4">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
            vero pariatur quis necessitatibus odio, totam rem magni animi vel
            nobis est? Illo, a voluptatem reiciendis commodi rerum quas
            assumenda voluptatibus?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
            vero pariatur quis necessitatibus odio, totam rem magni animi vel
            nobis est?
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae,
            vero pariatur quis necessitatibus odio.
          </p>
        </div>
      </section>
      <section id="contact" className="text-center my-8">
        <SectionHeaders
          subHeader={"Don't hesitate"}
          mainHeader={"Contact Us"}
        />
        <div className="mt-8">
          <a
            className="text-4xl underline text-gray-500"
            href="tel:+380501234567"
          >
            +380501234567
          </a>
        </div>
      </section>
    </>
  );
}
