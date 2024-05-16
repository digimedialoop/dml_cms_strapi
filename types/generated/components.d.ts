import type { Schema, Attribute } from '@strapi/strapi';

export interface ElementsSeo extends Schema.Component {
  collectionName: 'components_elements_seos';
  info: {
    displayName: 'SEO';
    icon: 'cast';
    description: '';
  };
  attributes: {
    pageTitle: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    seoDesicription: Attribute.String &
      Attribute.SetMinMaxLength<{
        maxLength: 160;
      }>;
    seoKeywords: Attribute.String;
    seoImage: Attribute.Media;
    type: Attribute.Enumeration<
      [
        'article',
        'book',
        'event',
        'game',
        'music',
        'place',
        'product',
        'profile',
        'video',
        'website'
      ]
    > &
      Attribute.SetPluginOptions<{
        i18n: {
          localized: true;
        };
      }> &
      Attribute.DefaultTo<'website'>;
  };
}

export interface SectionsPageComponents extends Schema.Component {
  collectionName: 'components_sections_page_components';
  info: {
    displayName: 'Page Components';
    icon: 'apps';
  };
  attributes: {
    Komponente: Attribute.Relation<
      'sections.page-components',
      'oneToOne',
      'api::pagecomponent.pagecomponent'
    >;
  };
}

export interface SectionsStandardSection extends Schema.Component {
  collectionName: 'components_sections_standard_sections';
  info: {
    displayName: 'Standard Section';
    icon: 'layer';
    description: '';
  };
  attributes: {
    sectionText: Attribute.Blocks;
    sectionImage: Attribute.Media;
    button: Attribute.Relation<
      'sections.standard-section',
      'oneToOne',
      'api::button.button'
    >;
    design: Attribute.Relation<
      'sections.standard-section',
      'oneToOne',
      'api::design.design'
    >;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.seo': ElementsSeo;
      'sections.page-components': SectionsPageComponents;
      'sections.standard-section': SectionsStandardSection;
    }
  }
}
