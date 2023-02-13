import { Container } from "../../common/container.component";
import { BlogSectionContainer } from "./blog.styles";

export const BlogSection = () => {
  return (
    <Container>
      <BlogSectionContainer>
        <h2 className="heading">
          Writing on software design, company building, and the aerospace
          industry.
        </h2>
        <p className="sub-heading">
          All of my long-form thoughts on programming, leadership, product
          design, and more, collected in chronological order.
        </p>

        {/* tags a, search, filters goes here */}

        <div className="blog-list-container">
          <div className="blog-card">
            <p className="blog-published-date">Jan 5, 2023</p>
            <div className="blog-info">
              <h2 className="blog-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt, blanditiis.
              </h2>
              <p className="blog-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem quaerat facilis reprehenderit delectus est
                voluptatibus sint maiores corrupti numquam rem.
              </p>

              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>

          <div className="blog-card">
            <p className="blog-published-date">Jan 5, 2023</p>
            <div className="blog-info">
              <h2 className="blog-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt, blanditiis.
              </h2>
              <p className="blog-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem quaerat facilis reprehenderit delectus est
                voluptatibus sint maiores corrupti numquam rem.
              </p>

              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>

          <div className="blog-card">
            <p className="blog-published-date">Jan 5, 2023</p>
            <div className="blog-info">
              <h2 className="blog-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt, blanditiis.
              </h2>
              <p className="blog-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem quaerat facilis reprehenderit delectus est
                voluptatibus sint maiores corrupti numquam rem.
              </p>

              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>

          <div className="blog-card">
            <p className="blog-published-date">Jan 5, 2023</p>
            <div className="blog-info">
              <h2 className="blog-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt, blanditiis.
              </h2>
              <p className="blog-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem quaerat facilis reprehenderit delectus est
                voluptatibus sint maiores corrupti numquam rem.
              </p>

              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>

          <div className="blog-card">
            <p className="blog-published-date">Jan 5, 2023</p>
            <div className="blog-info">
              <h2 className="blog-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt, blanditiis.
              </h2>
              <p className="blog-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem quaerat facilis reprehenderit delectus est
                voluptatibus sint maiores corrupti numquam rem.
              </p>

              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>

          <div className="blog-card">
            <p className="blog-published-date">Jan 5, 2023</p>
            <div className="blog-info">
              <h2 className="blog-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt, blanditiis.
              </h2>
              <p className="blog-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem quaerat facilis reprehenderit delectus est
                voluptatibus sint maiores corrupti numquam rem.
              </p>

              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>
          <div className="blog-card">
            <p className="blog-published-date">Jan 5, 2023</p>
            <div className="blog-info">
              <h2 className="blog-title">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt, blanditiis.
              </h2>
              <p className="blog-desc">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Voluptatem quaerat facilis reprehenderit delectus est
                voluptatibus sint maiores corrupti numquam rem.
              </p>

              <a href="#" className="read-more">
                Read More
              </a>
            </div>
          </div>
        </div>
      </BlogSectionContainer>
    </Container>
  );
};
