// import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

// function CarouselComponent() {
//   return (
//     <Carousel>
//       <Carousel.Item>
//         <ExampleCarouselImage text="First slide" />
//         <Carousel.Caption>
//           <h3>First slide label</h3>
//           <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Second slide" />
//         <Carousel.Caption>
//           <h3>Second slide label</h3>
//           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
//         </Carousel.Caption>
//       </Carousel.Item>
//       <Carousel.Item>
//         <ExampleCarouselImage text="Third slide" />
//         <Carousel.Caption>
//           <h3>Third slide label</h3>
//           <p>
//             Praesent commodo cursus magna, vel scelerisque nisl consectetur.
//           </p>
//         </Carousel.Caption>
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default CarouselComponent;


import { Carousel } from 'bootstrap';
 
const ImageCarousel = () => {

  return (

    <Carousel>

      <Carousel.Item>

        <img

          className="d-block w-100"

          src="/images/image1.jpeg"

          alt="First slide"

        />

      </Carousel.Item>

      <Carousel.Item>

        <img

          className="d-block w-100"

          src="/images/image2.jpeg"

          alt="Second slide"

        />

      </Carousel.Item>

      <Carousel.Item>

        <img

          className="d-block w-100"

          src="/images/image3.jpeg"

          alt="Third slide"

        />

      </Carousel.Item>

    </Carousel>

  );

};
 
export default ImageCarousel;

        