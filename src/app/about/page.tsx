const AboutPage = () => {
    return (
        <section className="flex justify-center py-20">
            <div className="container">
                <div className="mb-14 grid gap-5 text-center md:grid-cols-1 md:text-left">
                    <p className="text-muted-foreground font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam, fuga. Aperiam nam voluptatibus ad ipsam dolorem, officia error quae esse doloremque quisquam quasi sapiente molestiae eius minima tempora iusto molestias. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta error iste culpa exercitationem sapiente, harum omnis ea accusamus optio at hic ratione. Alias rerum illum voluptate reprehenderit, dolor ratione aperiam.</p>
                </div>
                <div className="flex flex-col items-center justify-start gap-6 lg:flex-row">
                    <div className="flex w-full flex-col items-start justify-start gap-24 lg:w-1/2">
                        <div className="pr-6">
                            <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:mb-10 lg:text-6xl">Our Story</h1>
                            <p className="mb-9 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed alias repellendus perferendis earum facilis est soluta consequatur placeat hic aliquid exercitationem, ex molestias nam veniam distinctio maxime culpa magnam autem.</p>
                            <p className="text-muted-foreground">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique dolore quas placeat expedita aliquam rerum tempore amet, sequi ipsa ad quam, adipisci exercitationem nihil, sapiente laborum minus doloribus consequuntur sed. Quo repudiandae nihil quas voluptates, aut beatae reiciendis aliquid perspiciatis quae explicabo inventore temporibus laborum, nostrum omnis quos excepturi dolorum reprehenderit vel labore eaque libero perferendis? Qui illo numquam beatae?
                            </p>
                        </div>
                        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                            <img src="https://library.shadcnblocks.com/images/block/photos/annie-spratt-MChSQHxGZrQ-unsplash.jpg" alt="about 1" className="aspect-[0.7] w-full rounded-lg object-cover md:w-1/2" />
                            <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                                <img src="https://library.shadcnblocks.com/images/block/photos/annie-spratt-AkftcHujUmk-unsplash.jpg" alt="about 2" className="aspect-[1.1] rounded-lg object-cover" />
                                <img src="https://library.shadcnblocks.com/images/block/photos/annie-spratt-vGgn0xLdy8s-unsplash.jpg" alt="about 3" className="aspect-[0.7] rounded-lg object-cover" />
                            </div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col items-center justify-center gap-12 pt-12 lg:w-1/2 lg:pt-48">
                        <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                            <img src="https://library.shadcnblocks.com/images/block/photos/johnson-wang-iI4sR_nkkbc-unsplash.jpg" alt="about 4" className="aspect-[0.9] w-full rounded-lg object-cover md:w-1/2" />
                            <div className="flex w-full flex-col items-center justify-center gap-6 md:w-1/2">
                                <img src="https://library.shadcnblocks.com/images/block/photos/nastuh-abootalebi-eHD8Y1Znfpk-unsplash.jpg" alt="about 5" className="aspect-[0.8] rounded-lg object-cover" />
                                <img src="https://library.shadcnblocks.com/images/block/photos/alvin-engler-bIhpiQA009k-unsplash.jpg" alt="about 6" className="aspect-[0.9] rounded-lg object-cover" />
                            </div>
                        </div>
                        <div className="px-8">
                            <h1 className="mb-8 text-2xl font-semibold lg:mb-6">Our Workplace</h1>
                            <p className="mb-9 lg:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit quae vel rem tenetur illum aspernatur. Ea, facere soluta cumque laboriosam repudiandae quaerat inventore dolores saepe pariatur, adipisci atque voluptate doloribus!</p>
                            <p className="text-muted-foreground">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure aliquid laudantium minus distinctio exercitationem odio non nihil blanditiis quae, beatae assumenda ad reiciendis soluta dolorem. Natus repellendus quidem dolorum temporibus!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AboutPage;


// const AboutPage = ({
//     title = "About Us",
//     description = "Shadcnblocks is a passionate team dedicated to creating innovative solutions that empower businesses to thrive in the digital age.",
//     mainImage = {
//         src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-1.svg",
//         alt: "placeholder",
//     },
//     secondaryImage = {
//         src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
//         alt: "placeholder",
//     },
//     breakout = {
//         src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
//         alt: "logo",
//         title: "Hundreds of blocks at Shadcnblocks.com",
//         description:
//             "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
//         buttonText: "Discover more",
//         buttonUrl: "https://shadcnblocks.com",
//     },
//     companiesTitle = "Valued by clients worldwide",
//     companies = defaultCompanies,
//     achievementsTitle = "Our Achievements in Numbers",
//     achievementsDescription = "Providing businesses with effective tools to improve workflows, boost efficiency, and encourage growth.",
//     achievements = defaultAchievements,
// }: AboutProps = {}) => {
//     return (
//         <section className="flex justify-center py-20">
//             <div className="container">
//                 <div className="mb-14 grid gap-5 text-center md:grid-cols-2 md:text-left">
//                     <h1 className="text-5xl font-semibold">{title}</h1>
//                     <p className="text-muted-foreground">{description}</p>
//                 </div>
//                 <div className="grid gap-7 lg:grid-cols-3">
//                     <img
//                         src={mainImage.src}
//                         alt={mainImage.alt}
//                         className="size-full max-h-[620px] rounded-xl object-cover lg:col-span-2"
//                     />
//                     <div className="flex flex-col gap-7 md:flex-row lg:flex-col">
//                         <div className="bg-muted flex flex-col justify-between gap-6 rounded-xl p-7 md:w-1/2 lg:w-auto">
//                             <img
//                                 src={breakout.src}
//                                 alt={breakout.alt}
//                                 className="mr-auto h-12"
//                             />
//                             <div>
//                                 <p className="mb-2 text-lg font-semibold">{breakout.title}</p>
//                                 <p className="text-muted-foreground">{breakout.description}</p>
//                             </div>
//                             <Button variant="outline" className="mr-auto" asChild>
//                                 <a href={breakout.buttonUrl} target="_blank">
//                                     {breakout.buttonText}
//                                 </a>
//                             </Button>
//                         </div>
//                         <img
//                             src={secondaryImage.src}
//                             alt={secondaryImage.alt}
//                             className="grow basis-0 rounded-xl object-cover md:w-1/2 lg:min-h-0 lg:w-auto"
//                         />
//                     </div>
//                 </div>
//                 <div className="py-32">
//                     <p className="text-center">{companiesTitle} </p>
//                     <div className="mt-8 flex flex-wrap justify-center gap-8">
//                         {companies.map((company, idx) => (
//                             <div className="flex items-center gap-3" key={company.src + idx}>
//                                 <img
//                                     src={company.src}
//                                     alt={company.alt}
//                                     className="h-6 w-auto md:h-8"
//                                 />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//                 <div className="bg-muted relative overflow-hidden rounded-xl p-10 md:p-16">
//                     <div className="flex flex-col gap-4 text-center md:text-left">
//                         <h2 className="text-4xl font-semibold">{achievementsTitle}</h2>
//                         <p className="text-muted-foreground max-w-xl">
//                             {achievementsDescription}
//                         </p>
//                     </div>
//                     <div className="mt-10 flex flex-wrap justify-between gap-10 text-center">
//                         {achievements.map((item, idx) => (
//                             <div className="flex flex-col gap-4" key={item.label + idx}>
//                                 <p>{item.label}</p>
//                                 <span className="text-4xl font-semibold md:text-5xl">
//                                     {item.value}
//                                 </span>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="pointer-events-none absolute -top-1 right-1 z-10 hidden h-full w-full bg-[linear-gradient(to_right,hsl(var(--muted-foreground))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--muted-foreground))_1px,transparent_1px)] bg-[size:80px_80px] opacity-15 [mask-image:linear-gradient(to_bottom_right,#000,transparent,transparent)] md:block"></div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AboutPage;
