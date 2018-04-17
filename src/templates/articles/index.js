import React from 'react';
import graphql from 'graphql';
import Link, { withPrefix } from 'gatsby-link';
import Breadcrumbs from '../../components/breadcrumbs';

import './index.less';

// TODO:
/*
  2. Subtitle
  3. Prev and next article
  4. More from Category
*/

export default function Template ({ data }) {
  const post = data.markdownRemark.frontmatter;
  const image = post.image ? <img src={withPrefix(post.image)} alt={post.title} className="img-thumbnail" /> : null;

  return (
    <div className="container">
      <div className="row article" role="main">
        <Breadcrumbs links={[{ text: 'Статті', url: '/articles' }, { text: post.title }]} />
        <article className="col-12" itemScope itemType="http://schema.org/Article">
          <header className="col-xs-12">
            <div className="article-category-container">
              <Link to={`/categories/${post.category}`} className="category-link">
                <span itemProp="articleSection">{post.category}</span>
              </Link>
            </div>
            <h1 itemProp="headline">{post.title}</h1>
            { post.subtitle && post.subtitle.length
              ? <h2 className="subtitle" itemProp="description">{post.subtitle}</h2>
              : null
            }
            {image}
            <div className="col-gray">Теги: {
              (post.tags || []).map((tag, index) => (<span key={index}>{!!index && ', '}<Link to={`/tags/${tag}`}>{tag}</Link></span>))
            }
            </div>
            <div className="content" dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
          </header>
        </article>
      </div>
    </div>
  );
}

export const pageQuery = graphql`
  query ArticleByPath($slug: String!) {
    markdownRemark(frontmatter: { path: { eq: $slug } }) {
      html
      frontmatter {
        path
        category
        title
        subtitle
        image
        tags
      }
    }

    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title
            path
          }
        }
      }
    }
  }
`;