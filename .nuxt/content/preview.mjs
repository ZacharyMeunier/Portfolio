export const collections = {
  "content_en": {
    "name": "content_en",
    "pascalName": "ContentEn",
    "tableName": "_content_content_en",
    "source": [
      {
        "_resolved": true,
        "prefix": "/en",
        "include": "en/**/*.md",
        "exclude": [
          "en/articles/*.md"
        ],
        "cwd": "E:/Portfolio/content"
      }
    ],
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "date": "string",
      "description": "string",
      "extension": "string",
      "head": "json",
      "meta": "json",
      "navigation": "json",
      "ogImage": "json",
      "path": "string",
      "robots": "string",
      "schemaOrg": "json",
      "seo": "json",
      "sitemap": "json",
      "stem": "string"
    },
    "schema": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$ref": "#/definitions/__SCHEMA__",
      "definitions": {
        "content_en": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "stem": {
              "type": "string"
            },
            "extension": {
              "type": "string",
              "enum": [
                "md",
                "yaml",
                "yml",
                "json",
                "csv",
                "xml"
              ]
            },
            "meta": {
              "type": "object",
              "additionalProperties": {}
            },
            "path": {
              "type": "string"
            },
            "title": {
              "type": "string",
              "minLength": 1
            },
            "description": {
              "type": "string",
              "minLength": 1
            },
            "seo": {
              "allOf": [
                {
                  "type": "object",
                  "properties": {
                    "title": {
                      "type": "string"
                    },
                    "description": {
                      "type": "string"
                    }
                  }
                },
                {
                  "type": "object",
                  "additionalProperties": {}
                }
              ],
              "default": {}
            },
            "body": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string"
                },
                "children": {},
                "toc": {}
              },
              "required": [
                "type"
              ],
              "additionalProperties": false
            },
            "navigation": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "object",
                  "properties": {
                    "title": {
                      "type": "string"
                    },
                    "description": {
                      "type": "string"
                    },
                    "icon": {
                      "type": "string",
                      "$content": {
                        "editor": {
                          "input": "icon"
                        }
                      }
                    }
                  },
                  "required": [
                    "title",
                    "description",
                    "icon"
                  ],
                  "additionalProperties": false
                }
              ],
              "default": true
            },
            "sitemap": {
              "type": "object",
              "properties": {
                "loc": {
                  "type": "string"
                },
                "lastmod": {
                  "type": "string",
                  "format": "date-time"
                },
                "changefreq": {
                  "type": "string",
                  "enum": [
                    "always",
                    "hourly",
                    "daily",
                    "weekly",
                    "monthly",
                    "yearly",
                    "never"
                  ]
                },
                "priority": {
                  "type": "number"
                },
                "images": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "loc": {
                        "type": "string"
                      },
                      "caption": {
                        "type": "string"
                      },
                      "geo_location": {
                        "type": "string"
                      },
                      "title": {
                        "type": "string"
                      },
                      "license": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "loc"
                    ],
                    "additionalProperties": false
                  }
                },
                "videos": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "content_loc": {
                        "type": "string"
                      },
                      "player_loc": {
                        "type": "string"
                      },
                      "duration": {
                        "type": "string"
                      },
                      "expiration_date": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "rating": {
                        "type": "number"
                      },
                      "view_count": {
                        "type": "number"
                      },
                      "publication_date": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "family_friendly": {
                        "type": "boolean"
                      },
                      "tag": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "restriction": {
                        "type": "object",
                        "properties": {
                          "relationship": {
                            "type": "string",
                            "const": "allow"
                          },
                          "value": {
                            "type": "string"
                          }
                        },
                        "additionalProperties": false
                      },
                      "gallery_loc": {
                        "type": "string"
                      },
                      "price": {
                        "type": "string"
                      },
                      "requires_subscription": {
                        "type": "boolean"
                      },
                      "uploader": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "content_loc"
                    ],
                    "additionalProperties": false
                  }
                }
              },
              "additionalProperties": false
            },
            "robots": {
              "type": [
                "string",
                "boolean"
              ]
            },
            "head": {
              "type": "object",
              "properties": {
                "meta": {
                  "type": "array",
                  "items": {
                    "anyOf": [
                      {
                        "not": {}
                      },
                      {
                        "type": "object",
                        "additionalProperties": {}
                      }
                    ]
                  }
                },
                "script": {
                  "type": "array",
                  "items": {
                    "anyOf": [
                      {
                        "not": {}
                      },
                      {
                        "type": "object",
                        "additionalProperties": {}
                      }
                    ]
                  }
                }
              },
              "required": [
                "meta",
                "script"
              ],
              "additionalProperties": false
            },
            "schemaOrg": {
              "anyOf": [
                {
                  "type": "object",
                  "additionalProperties": {}
                },
                {
                  "anyOf": [
                    {
                      "not": {}
                    },
                    {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "additionalProperties": {}
                      }
                    }
                  ]
                }
              ]
            },
            "ogImage": {
              "type": "object",
              "properties": {
                "url": {
                  "type": "string"
                },
                "component": {
                  "type": "string"
                },
                "props": {
                  "type": "object",
                  "additionalProperties": {}
                }
              },
              "required": [
                "props"
              ],
              "additionalProperties": false
            },
            "date": {
              "type": "string",
              "minLength": 1
            }
          },
          "required": [
            "id",
            "stem",
            "extension",
            "meta",
            "path",
            "title",
            "description",
            "body",
            "date"
          ],
          "additionalProperties": false
        }
      }
    },
    "tableDefinition": "CREATE TABLE IF NOT EXISTS _content_content_en (id TEXT PRIMARY KEY, \"title\" VARCHAR, \"body\" TEXT, \"date\" VARCHAR, \"description\" VARCHAR, \"extension\" VARCHAR, \"head\" TEXT NULL, \"meta\" TEXT, \"navigation\" TEXT DEFAULT true, \"ogImage\" TEXT NULL, \"path\" VARCHAR, \"robots\" TEXT NULL, \"schemaOrg\" TEXT NULL, \"seo\" TEXT DEFAULT '{}', \"sitemap\" TEXT NULL, \"stem\" VARCHAR, \"__hash__\" TEXT UNIQUE);"
  },
  "content_fr": {
    "name": "content_fr",
    "pascalName": "ContentFr",
    "tableName": "_content_content_fr",
    "source": [
      {
        "_resolved": true,
        "prefix": "/fr",
        "include": "fr/**/*.md",
        "exclude": [
          "fr/articles/*.md"
        ],
        "cwd": "E:/Portfolio/content"
      }
    ],
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "date": "string",
      "description": "string",
      "extension": "string",
      "head": "json",
      "meta": "json",
      "navigation": "json",
      "ogImage": "json",
      "path": "string",
      "robots": "string",
      "schemaOrg": "json",
      "seo": "json",
      "sitemap": "json",
      "stem": "string"
    },
    "schema": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$ref": "#/definitions/__SCHEMA__",
      "definitions": {
        "content_fr": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "stem": {
              "type": "string"
            },
            "extension": {
              "type": "string",
              "enum": [
                "md",
                "yaml",
                "yml",
                "json",
                "csv",
                "xml"
              ]
            },
            "meta": {
              "type": "object",
              "additionalProperties": {}
            },
            "path": {
              "type": "string"
            },
            "title": {
              "type": "string",
              "minLength": 1
            },
            "description": {
              "type": "string",
              "minLength": 1
            },
            "seo": {
              "allOf": [
                {
                  "type": "object",
                  "properties": {
                    "title": {
                      "type": "string"
                    },
                    "description": {
                      "type": "string"
                    }
                  }
                },
                {
                  "type": "object",
                  "additionalProperties": {}
                }
              ],
              "default": {}
            },
            "body": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string"
                },
                "children": {},
                "toc": {}
              },
              "required": [
                "type"
              ],
              "additionalProperties": false
            },
            "navigation": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "object",
                  "properties": {
                    "title": {
                      "type": "string"
                    },
                    "description": {
                      "type": "string"
                    },
                    "icon": {
                      "type": "string",
                      "$content": {
                        "editor": {
                          "input": "icon"
                        }
                      }
                    }
                  },
                  "required": [
                    "title",
                    "description",
                    "icon"
                  ],
                  "additionalProperties": false
                }
              ],
              "default": true
            },
            "sitemap": {
              "type": "object",
              "properties": {
                "loc": {
                  "type": "string"
                },
                "lastmod": {
                  "type": "string",
                  "format": "date-time"
                },
                "changefreq": {
                  "type": "string",
                  "enum": [
                    "always",
                    "hourly",
                    "daily",
                    "weekly",
                    "monthly",
                    "yearly",
                    "never"
                  ]
                },
                "priority": {
                  "type": "number"
                },
                "images": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "loc": {
                        "type": "string"
                      },
                      "caption": {
                        "type": "string"
                      },
                      "geo_location": {
                        "type": "string"
                      },
                      "title": {
                        "type": "string"
                      },
                      "license": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "loc"
                    ],
                    "additionalProperties": false
                  }
                },
                "videos": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "content_loc": {
                        "type": "string"
                      },
                      "player_loc": {
                        "type": "string"
                      },
                      "duration": {
                        "type": "string"
                      },
                      "expiration_date": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "rating": {
                        "type": "number"
                      },
                      "view_count": {
                        "type": "number"
                      },
                      "publication_date": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "family_friendly": {
                        "type": "boolean"
                      },
                      "tag": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "restriction": {
                        "type": "object",
                        "properties": {
                          "relationship": {
                            "type": "string",
                            "const": "allow"
                          },
                          "value": {
                            "type": "string"
                          }
                        },
                        "additionalProperties": false
                      },
                      "gallery_loc": {
                        "type": "string"
                      },
                      "price": {
                        "type": "string"
                      },
                      "requires_subscription": {
                        "type": "boolean"
                      },
                      "uploader": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "content_loc"
                    ],
                    "additionalProperties": false
                  }
                }
              },
              "additionalProperties": false
            },
            "robots": {
              "type": [
                "string",
                "boolean"
              ]
            },
            "head": {
              "type": "object",
              "properties": {
                "meta": {
                  "type": "array",
                  "items": {
                    "anyOf": [
                      {
                        "not": {}
                      },
                      {
                        "type": "object",
                        "additionalProperties": {}
                      }
                    ]
                  }
                },
                "script": {
                  "type": "array",
                  "items": {
                    "anyOf": [
                      {
                        "not": {}
                      },
                      {
                        "type": "object",
                        "additionalProperties": {}
                      }
                    ]
                  }
                }
              },
              "required": [
                "meta",
                "script"
              ],
              "additionalProperties": false
            },
            "schemaOrg": {
              "anyOf": [
                {
                  "type": "object",
                  "additionalProperties": {}
                },
                {
                  "anyOf": [
                    {
                      "not": {}
                    },
                    {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "additionalProperties": {}
                      }
                    }
                  ]
                }
              ]
            },
            "ogImage": {
              "type": "object",
              "properties": {
                "url": {
                  "type": "string"
                },
                "component": {
                  "type": "string"
                },
                "props": {
                  "type": "object",
                  "additionalProperties": {}
                }
              },
              "required": [
                "props"
              ],
              "additionalProperties": false
            },
            "date": {
              "type": "string",
              "minLength": 1
            }
          },
          "required": [
            "id",
            "stem",
            "extension",
            "meta",
            "path",
            "title",
            "description",
            "body",
            "date"
          ],
          "additionalProperties": false
        }
      }
    },
    "tableDefinition": "CREATE TABLE IF NOT EXISTS _content_content_fr (id TEXT PRIMARY KEY, \"title\" VARCHAR, \"body\" TEXT, \"date\" VARCHAR, \"description\" VARCHAR, \"extension\" VARCHAR, \"head\" TEXT NULL, \"meta\" TEXT, \"navigation\" TEXT DEFAULT true, \"ogImage\" TEXT NULL, \"path\" VARCHAR, \"robots\" TEXT NULL, \"schemaOrg\" TEXT NULL, \"seo\" TEXT DEFAULT '{}', \"sitemap\" TEXT NULL, \"stem\" VARCHAR, \"__hash__\" TEXT UNIQUE);"
  },
  "articles_en": {
    "name": "articles_en",
    "pascalName": "ArticlesEn",
    "tableName": "_content_articles_en",
    "source": [
      {
        "_resolved": true,
        "prefix": "/en/articles",
        "include": "en/articles/*.md",
        "cwd": "E:/Portfolio/content"
      }
    ],
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "date": "string",
      "description": "string",
      "extension": "string",
      "head": "json",
      "image": "string",
      "meta": "json",
      "navigation": "json",
      "ogImage": "json",
      "path": "string",
      "readingTime": "string",
      "robots": "string",
      "schemaOrg": "json",
      "seo": "json",
      "sitemap": "json",
      "stem": "string",
      "tags": "json"
    },
    "schema": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$ref": "#/definitions/__SCHEMA__",
      "definitions": {
        "articles_en": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "stem": {
              "type": "string"
            },
            "extension": {
              "type": "string",
              "enum": [
                "md",
                "yaml",
                "yml",
                "json",
                "csv",
                "xml"
              ]
            },
            "meta": {
              "type": "object",
              "additionalProperties": {}
            },
            "path": {
              "type": "string"
            },
            "title": {
              "type": "string",
              "minLength": 1
            },
            "description": {
              "type": "string",
              "minLength": 1
            },
            "seo": {
              "allOf": [
                {
                  "type": "object",
                  "properties": {
                    "title": {
                      "type": "string"
                    },
                    "description": {
                      "type": "string"
                    }
                  }
                },
                {
                  "type": "object",
                  "additionalProperties": {}
                }
              ],
              "default": {}
            },
            "body": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string"
                },
                "children": {},
                "toc": {}
              },
              "required": [
                "type"
              ],
              "additionalProperties": false
            },
            "navigation": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "object",
                  "properties": {
                    "title": {
                      "type": "string"
                    },
                    "description": {
                      "type": "string"
                    },
                    "icon": {
                      "type": "string",
                      "$content": {
                        "editor": {
                          "input": "icon"
                        }
                      }
                    }
                  },
                  "required": [
                    "title",
                    "description",
                    "icon"
                  ],
                  "additionalProperties": false
                }
              ],
              "default": true
            },
            "sitemap": {
              "type": "object",
              "properties": {
                "loc": {
                  "type": "string"
                },
                "lastmod": {
                  "type": "string",
                  "format": "date-time"
                },
                "changefreq": {
                  "type": "string",
                  "enum": [
                    "always",
                    "hourly",
                    "daily",
                    "weekly",
                    "monthly",
                    "yearly",
                    "never"
                  ]
                },
                "priority": {
                  "type": "number"
                },
                "images": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "loc": {
                        "type": "string"
                      },
                      "caption": {
                        "type": "string"
                      },
                      "geo_location": {
                        "type": "string"
                      },
                      "title": {
                        "type": "string"
                      },
                      "license": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "loc"
                    ],
                    "additionalProperties": false
                  }
                },
                "videos": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "content_loc": {
                        "type": "string"
                      },
                      "player_loc": {
                        "type": "string"
                      },
                      "duration": {
                        "type": "string"
                      },
                      "expiration_date": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "rating": {
                        "type": "number"
                      },
                      "view_count": {
                        "type": "number"
                      },
                      "publication_date": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "family_friendly": {
                        "type": "boolean"
                      },
                      "tag": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "restriction": {
                        "type": "object",
                        "properties": {
                          "relationship": {
                            "type": "string",
                            "const": "allow"
                          },
                          "value": {
                            "type": "string"
                          }
                        },
                        "additionalProperties": false
                      },
                      "gallery_loc": {
                        "type": "string"
                      },
                      "price": {
                        "type": "string"
                      },
                      "requires_subscription": {
                        "type": "boolean"
                      },
                      "uploader": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "content_loc"
                    ],
                    "additionalProperties": false
                  }
                }
              },
              "additionalProperties": false
            },
            "robots": {
              "type": [
                "string",
                "boolean"
              ]
            },
            "head": {
              "type": "object",
              "properties": {
                "meta": {
                  "type": "array",
                  "items": {
                    "anyOf": [
                      {
                        "not": {}
                      },
                      {
                        "type": "object",
                        "additionalProperties": {}
                      }
                    ]
                  }
                },
                "script": {
                  "type": "array",
                  "items": {
                    "anyOf": [
                      {
                        "not": {}
                      },
                      {
                        "type": "object",
                        "additionalProperties": {}
                      }
                    ]
                  }
                }
              },
              "required": [
                "meta",
                "script"
              ],
              "additionalProperties": false
            },
            "schemaOrg": {
              "anyOf": [
                {
                  "type": "object",
                  "additionalProperties": {}
                },
                {
                  "anyOf": [
                    {
                      "not": {}
                    },
                    {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "additionalProperties": {}
                      }
                    }
                  ]
                }
              ]
            },
            "ogImage": {
              "type": "object",
              "properties": {
                "url": {
                  "type": "string"
                },
                "component": {
                  "type": "string"
                },
                "props": {
                  "type": "object",
                  "additionalProperties": {}
                }
              },
              "required": [
                "props"
              ],
              "additionalProperties": false
            },
            "date": {
              "type": "string",
              "minLength": 1
            },
            "image": {
              "type": "string",
              "format": "uri"
            },
            "readingTime": {
              "type": "string",
              "minLength": 1
            },
            "tags": {
              "type": "array",
              "items": {
                "type": "string",
                "minLength": 1
              }
            }
          },
          "required": [
            "id",
            "stem",
            "extension",
            "meta",
            "path",
            "title",
            "description",
            "body",
            "date",
            "image",
            "readingTime",
            "tags"
          ],
          "additionalProperties": false
        }
      }
    },
    "tableDefinition": "CREATE TABLE IF NOT EXISTS _content_articles_en (id TEXT PRIMARY KEY, \"title\" VARCHAR, \"body\" TEXT, \"date\" VARCHAR, \"description\" VARCHAR, \"extension\" VARCHAR, \"head\" TEXT NULL, \"image\" VARCHAR, \"meta\" TEXT, \"navigation\" TEXT DEFAULT true, \"ogImage\" TEXT NULL, \"path\" VARCHAR, \"readingTime\" VARCHAR, \"robots\" TEXT NULL, \"schemaOrg\" TEXT NULL, \"seo\" TEXT DEFAULT '{}', \"sitemap\" TEXT NULL, \"stem\" VARCHAR, \"tags\" TEXT, \"__hash__\" TEXT UNIQUE);"
  },
  "articles_fr": {
    "name": "articles_fr",
    "pascalName": "ArticlesFr",
    "tableName": "_content_articles_fr",
    "source": [
      {
        "_resolved": true,
        "prefix": "/fr/articles",
        "include": "fr/articles/*.md",
        "cwd": "E:/Portfolio/content"
      }
    ],
    "type": "page",
    "fields": {
      "id": "string",
      "title": "string",
      "body": "json",
      "date": "string",
      "description": "string",
      "extension": "string",
      "head": "json",
      "image": "string",
      "meta": "json",
      "navigation": "json",
      "ogImage": "json",
      "path": "string",
      "readingTime": "string",
      "robots": "string",
      "schemaOrg": "json",
      "seo": "json",
      "sitemap": "json",
      "stem": "string",
      "tags": "json"
    },
    "schema": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$ref": "#/definitions/__SCHEMA__",
      "definitions": {
        "articles_fr": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "stem": {
              "type": "string"
            },
            "extension": {
              "type": "string",
              "enum": [
                "md",
                "yaml",
                "yml",
                "json",
                "csv",
                "xml"
              ]
            },
            "meta": {
              "type": "object",
              "additionalProperties": {}
            },
            "path": {
              "type": "string"
            },
            "title": {
              "type": "string",
              "minLength": 1
            },
            "description": {
              "type": "string",
              "minLength": 1
            },
            "seo": {
              "allOf": [
                {
                  "type": "object",
                  "properties": {
                    "title": {
                      "type": "string"
                    },
                    "description": {
                      "type": "string"
                    }
                  }
                },
                {
                  "type": "object",
                  "additionalProperties": {}
                }
              ],
              "default": {}
            },
            "body": {
              "type": "object",
              "properties": {
                "type": {
                  "type": "string"
                },
                "children": {},
                "toc": {}
              },
              "required": [
                "type"
              ],
              "additionalProperties": false
            },
            "navigation": {
              "anyOf": [
                {
                  "type": "boolean"
                },
                {
                  "type": "object",
                  "properties": {
                    "title": {
                      "type": "string"
                    },
                    "description": {
                      "type": "string"
                    },
                    "icon": {
                      "type": "string",
                      "$content": {
                        "editor": {
                          "input": "icon"
                        }
                      }
                    }
                  },
                  "required": [
                    "title",
                    "description",
                    "icon"
                  ],
                  "additionalProperties": false
                }
              ],
              "default": true
            },
            "sitemap": {
              "type": "object",
              "properties": {
                "loc": {
                  "type": "string"
                },
                "lastmod": {
                  "type": "string",
                  "format": "date-time"
                },
                "changefreq": {
                  "type": "string",
                  "enum": [
                    "always",
                    "hourly",
                    "daily",
                    "weekly",
                    "monthly",
                    "yearly",
                    "never"
                  ]
                },
                "priority": {
                  "type": "number"
                },
                "images": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "loc": {
                        "type": "string"
                      },
                      "caption": {
                        "type": "string"
                      },
                      "geo_location": {
                        "type": "string"
                      },
                      "title": {
                        "type": "string"
                      },
                      "license": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "loc"
                    ],
                    "additionalProperties": false
                  }
                },
                "videos": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "content_loc": {
                        "type": "string"
                      },
                      "player_loc": {
                        "type": "string"
                      },
                      "duration": {
                        "type": "string"
                      },
                      "expiration_date": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "rating": {
                        "type": "number"
                      },
                      "view_count": {
                        "type": "number"
                      },
                      "publication_date": {
                        "type": "string",
                        "format": "date-time"
                      },
                      "family_friendly": {
                        "type": "boolean"
                      },
                      "tag": {
                        "type": "string"
                      },
                      "category": {
                        "type": "string"
                      },
                      "restriction": {
                        "type": "object",
                        "properties": {
                          "relationship": {
                            "type": "string",
                            "const": "allow"
                          },
                          "value": {
                            "type": "string"
                          }
                        },
                        "additionalProperties": false
                      },
                      "gallery_loc": {
                        "type": "string"
                      },
                      "price": {
                        "type": "string"
                      },
                      "requires_subscription": {
                        "type": "boolean"
                      },
                      "uploader": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "content_loc"
                    ],
                    "additionalProperties": false
                  }
                }
              },
              "additionalProperties": false
            },
            "robots": {
              "type": [
                "string",
                "boolean"
              ]
            },
            "head": {
              "type": "object",
              "properties": {
                "meta": {
                  "type": "array",
                  "items": {
                    "anyOf": [
                      {
                        "not": {}
                      },
                      {
                        "type": "object",
                        "additionalProperties": {}
                      }
                    ]
                  }
                },
                "script": {
                  "type": "array",
                  "items": {
                    "anyOf": [
                      {
                        "not": {}
                      },
                      {
                        "type": "object",
                        "additionalProperties": {}
                      }
                    ]
                  }
                }
              },
              "required": [
                "meta",
                "script"
              ],
              "additionalProperties": false
            },
            "schemaOrg": {
              "anyOf": [
                {
                  "type": "object",
                  "additionalProperties": {}
                },
                {
                  "anyOf": [
                    {
                      "not": {}
                    },
                    {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "additionalProperties": {}
                      }
                    }
                  ]
                }
              ]
            },
            "ogImage": {
              "type": "object",
              "properties": {
                "url": {
                  "type": "string"
                },
                "component": {
                  "type": "string"
                },
                "props": {
                  "type": "object",
                  "additionalProperties": {}
                }
              },
              "required": [
                "props"
              ],
              "additionalProperties": false
            },
            "date": {
              "type": "string",
              "minLength": 1
            },
            "image": {
              "type": "string",
              "format": "uri"
            },
            "readingTime": {
              "type": "string",
              "minLength": 1
            },
            "tags": {
              "type": "array",
              "items": {
                "type": "string",
                "minLength": 1
              }
            }
          },
          "required": [
            "id",
            "stem",
            "extension",
            "meta",
            "path",
            "title",
            "description",
            "body",
            "date",
            "image",
            "readingTime",
            "tags"
          ],
          "additionalProperties": false
        }
      }
    },
    "tableDefinition": "CREATE TABLE IF NOT EXISTS _content_articles_fr (id TEXT PRIMARY KEY, \"title\" VARCHAR, \"body\" TEXT, \"date\" VARCHAR, \"description\" VARCHAR, \"extension\" VARCHAR, \"head\" TEXT NULL, \"image\" VARCHAR, \"meta\" TEXT, \"navigation\" TEXT DEFAULT true, \"ogImage\" TEXT NULL, \"path\" VARCHAR, \"readingTime\" VARCHAR, \"robots\" TEXT NULL, \"schemaOrg\" TEXT NULL, \"seo\" TEXT DEFAULT '{}', \"sitemap\" TEXT NULL, \"stem\" VARCHAR, \"tags\" TEXT, \"__hash__\" TEXT UNIQUE);"
  },
  "projects_en": {
    "name": "projects_en",
    "pascalName": "ProjectsEn",
    "tableName": "_content_projects_en",
    "source": [
      {
        "_resolved": true,
        "prefix": "/en/projects",
        "include": "en/projects/*.json",
        "cwd": "E:/Portfolio/content"
      }
    ],
    "type": "data",
    "fields": {
      "id": "string",
      "date": "string",
      "extension": "string",
      "featured": "boolean",
      "image": "string",
      "link": "string",
      "meta": "json",
      "name": "string",
      "release": "string",
      "stem": "string"
    },
    "schema": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$ref": "#/definitions/__SCHEMA__",
      "definitions": {
        "projects_en": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "stem": {
              "type": "string"
            },
            "extension": {
              "type": "string",
              "enum": [
                "md",
                "yaml",
                "yml",
                "json",
                "csv",
                "xml"
              ]
            },
            "meta": {
              "type": "object",
              "additionalProperties": {}
            },
            "name": {
              "type": "string",
              "minLength": 1
            },
            "image": {
              "type": "string",
              "format": "uri"
            },
            "link": {
              "type": "string",
              "format": "uri"
            },
            "release": {
              "type": "string",
              "minLength": 1
            },
            "date": {
              "type": "string",
              "minLength": 1
            },
            "featured": {
              "type": "boolean"
            }
          },
          "required": [
            "id",
            "stem",
            "extension",
            "meta",
            "name",
            "image",
            "link",
            "release",
            "date"
          ],
          "additionalProperties": false
        }
      }
    },
    "tableDefinition": "CREATE TABLE IF NOT EXISTS _content_projects_en (id TEXT PRIMARY KEY, \"date\" VARCHAR, \"extension\" VARCHAR, \"featured\" BOOLEAN NULL, \"image\" VARCHAR, \"link\" VARCHAR, \"meta\" TEXT, \"name\" VARCHAR, \"release\" VARCHAR, \"stem\" VARCHAR, \"__hash__\" TEXT UNIQUE);"
  },
  "projects_fr": {
    "name": "projects_fr",
    "pascalName": "ProjectsFr",
    "tableName": "_content_projects_fr",
    "source": [
      {
        "_resolved": true,
        "prefix": "/fr/projects",
        "include": "fr/projects/*.json",
        "cwd": "E:/Portfolio/content"
      }
    ],
    "type": "data",
    "fields": {
      "id": "string",
      "date": "string",
      "extension": "string",
      "featured": "boolean",
      "image": "string",
      "link": "string",
      "meta": "json",
      "name": "string",
      "release": "string",
      "stem": "string"
    },
    "schema": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$ref": "#/definitions/__SCHEMA__",
      "definitions": {
        "projects_fr": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "stem": {
              "type": "string"
            },
            "extension": {
              "type": "string",
              "enum": [
                "md",
                "yaml",
                "yml",
                "json",
                "csv",
                "xml"
              ]
            },
            "meta": {
              "type": "object",
              "additionalProperties": {}
            },
            "name": {
              "type": "string",
              "minLength": 1
            },
            "image": {
              "type": "string",
              "format": "uri"
            },
            "link": {
              "type": "string",
              "format": "uri"
            },
            "release": {
              "type": "string",
              "minLength": 1
            },
            "date": {
              "type": "string",
              "minLength": 1
            },
            "featured": {
              "type": "boolean"
            }
          },
          "required": [
            "id",
            "stem",
            "extension",
            "meta",
            "name",
            "image",
            "link",
            "release",
            "date"
          ],
          "additionalProperties": false
        }
      }
    },
    "tableDefinition": "CREATE TABLE IF NOT EXISTS _content_projects_fr (id TEXT PRIMARY KEY, \"date\" VARCHAR, \"extension\" VARCHAR, \"featured\" BOOLEAN NULL, \"image\" VARCHAR, \"link\" VARCHAR, \"meta\" TEXT, \"name\" VARCHAR, \"release\" VARCHAR, \"stem\" VARCHAR, \"__hash__\" TEXT UNIQUE);"
  },
  "stack": {
    "name": "stack",
    "pascalName": "Stack",
    "tableName": "_content_stack",
    "source": [
      {
        "_resolved": true,
        "prefix": "/",
        "include": "stack.json",
        "cwd": "E:/Portfolio/content"
      }
    ],
    "type": "data",
    "fields": {
      "id": "string",
      "extension": "string",
      "items": "json",
      "meta": "json",
      "stem": "string"
    },
    "schema": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$ref": "#/definitions/__SCHEMA__",
      "definitions": {
        "stack": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "stem": {
              "type": "string"
            },
            "extension": {
              "type": "string",
              "enum": [
                "md",
                "yaml",
                "yml",
                "json",
                "csv",
                "xml"
              ]
            },
            "meta": {
              "type": "object",
              "additionalProperties": {}
            },
            "items": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string",
                    "minLength": 1
                  },
                  "link": {
                    "type": "string",
                    "format": "uri"
                  },
                  "icon": {
                    "type": "string",
                    "minLength": 1
                  }
                },
                "required": [
                  "name",
                  "link",
                  "icon"
                ],
                "additionalProperties": false
              }
            }
          },
          "required": [
            "id",
            "stem",
            "extension",
            "meta",
            "items"
          ],
          "additionalProperties": false
        }
      }
    },
    "tableDefinition": "CREATE TABLE IF NOT EXISTS _content_stack (id TEXT PRIMARY KEY, \"extension\" VARCHAR, \"items\" TEXT, \"meta\" TEXT, \"stem\" VARCHAR, \"__hash__\" TEXT UNIQUE);"
  },
  "faq_en": {
    "name": "faq_en",
    "pascalName": "FaqEn",
    "tableName": "_content_faq_en",
    "source": [
      {
        "_resolved": true,
        "prefix": "/",
        "include": "en/faq.json",
        "cwd": "E:/Portfolio/content"
      }
    ],
    "type": "data",
    "fields": {
      "id": "string",
      "title": "string",
      "extension": "string",
      "faqQuestions": "json",
      "meta": "json",
      "stem": "string",
      "subtitle": "string"
    },
    "schema": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$ref": "#/definitions/__SCHEMA__",
      "definitions": {
        "faq_en": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "stem": {
              "type": "string"
            },
            "extension": {
              "type": "string",
              "enum": [
                "md",
                "yaml",
                "yml",
                "json",
                "csv",
                "xml"
              ]
            },
            "meta": {
              "type": "object",
              "additionalProperties": {}
            },
            "title": {
              "type": "string",
              "minLength": 1
            },
            "subtitle": {
              "type": "string",
              "minLength": 1
            },
            "faqQuestions": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "title": {
                    "type": "string",
                    "minLength": 1
                  },
                  "questions": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "label": {
                          "type": "string",
                          "minLength": 1
                        },
                        "content": {
                          "type": "string",
                          "minLength": 1
                        }
                      },
                      "required": [
                        "label",
                        "content"
                      ],
                      "additionalProperties": false
                    }
                  }
                },
                "required": [
                  "title",
                  "questions"
                ],
                "additionalProperties": false
              }
            }
          },
          "required": [
            "id",
            "stem",
            "extension",
            "meta",
            "title",
            "subtitle",
            "faqQuestions"
          ],
          "additionalProperties": false
        }
      }
    },
    "tableDefinition": "CREATE TABLE IF NOT EXISTS _content_faq_en (id TEXT PRIMARY KEY, \"title\" VARCHAR, \"extension\" VARCHAR, \"faqQuestions\" TEXT, \"meta\" TEXT, \"stem\" VARCHAR, \"subtitle\" VARCHAR, \"__hash__\" TEXT UNIQUE);"
  },
  "faq_fr": {
    "name": "faq_fr",
    "pascalName": "FaqFr",
    "tableName": "_content_faq_fr",
    "source": [
      {
        "_resolved": true,
        "prefix": "/",
        "include": "fr/faq.json",
        "cwd": "E:/Portfolio/content"
      }
    ],
    "type": "data",
    "fields": {
      "id": "string",
      "title": "string",
      "extension": "string",
      "faqQuestions": "json",
      "meta": "json",
      "stem": "string",
      "subtitle": "string"
    },
    "schema": {
      "$schema": "http://json-schema.org/draft-07/schema#",
      "$ref": "#/definitions/__SCHEMA__",
      "definitions": {
        "faq_fr": {
          "type": "object",
          "properties": {
            "id": {
              "type": "string"
            },
            "stem": {
              "type": "string"
            },
            "extension": {
              "type": "string",
              "enum": [
                "md",
                "yaml",
                "yml",
                "json",
                "csv",
                "xml"
              ]
            },
            "meta": {
              "type": "object",
              "additionalProperties": {}
            },
            "title": {
              "type": "string",
              "minLength": 1
            },
            "subtitle": {
              "type": "string",
              "minLength": 1
            },
            "faqQuestions": {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "title": {
                    "type": "string",
                    "minLength": 1
                  },
                  "questions": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "label": {
                          "type": "string",
                          "minLength": 1
                        },
                        "content": {
                          "type": "string",
                          "minLength": 1
                        }
                      },
                      "required": [
                        "label",
                        "content"
                      ],
                      "additionalProperties": false
                    }
                  }
                },
                "required": [
                  "title",
                  "questions"
                ],
                "additionalProperties": false
              }
            }
          },
          "required": [
            "id",
            "stem",
            "extension",
            "meta",
            "title",
            "subtitle",
            "faqQuestions"
          ],
          "additionalProperties": false
        }
      }
    },
    "tableDefinition": "CREATE TABLE IF NOT EXISTS _content_faq_fr (id TEXT PRIMARY KEY, \"title\" VARCHAR, \"extension\" VARCHAR, \"faqQuestions\" TEXT, \"meta\" TEXT, \"stem\" VARCHAR, \"subtitle\" VARCHAR, \"__hash__\" TEXT UNIQUE);"
  },
  "info": {
    "name": "info",
    "pascalName": "Info",
    "tableName": "_content_info",
    "source": [],
    "type": "data",
    "fields": {},
    "schema": {
      "$ref": "#/definitions/info",
      "definitions": {},
      "$schema": "http://json-schema.org/draft-07/schema#"
    },
    "tableDefinition": "CREATE TABLE IF NOT EXISTS _content_info (id TEXT PRIMARY KEY, \"ready\" BOOLEAN, \"structureVersion\" VARCHAR, \"version\" VARCHAR, \"__hash__\" TEXT UNIQUE);"
  }
}
export const gitInfo = {
  "name": "Portfolio",
  "owner": "ZacharyMeunier",
  "url": "https://github.com/ZacharyMeunier/Portfolio"
}
export const appConfigSchema = {
  "properties": {
    "id": "#appConfig",
    "properties": {
      "icon": {
        "title": "Nuxt Icon",
        "description": "Configure Nuxt Icon module preferences.",
        "tags": [
          "@studioIcon material-symbols:star"
        ],
        "id": "#appConfig/icon",
        "properties": {
          "size": {
            "title": "Icon Size",
            "description": "Set the default icon size.",
            "tags": [
              "@studioIcon material-symbols:format-size-rounded"
            ],
            "tsType": "string | undefined",
            "id": "#appConfig/icon/size",
            "default": {},
            "type": "any"
          },
          "class": {
            "title": "CSS Class",
            "description": "Set the default CSS class.",
            "tags": [
              "@studioIcon material-symbols:css"
            ],
            "id": "#appConfig/icon/class",
            "default": "",
            "type": "string"
          },
          "attrs": {
            "title": "Default Attributes",
            "description": "Attributes applied to every icon component.\n\n@default { \"aria-hidden\": true }",
            "tags": [
              "@studioIcon material-symbols:settings"
            ],
            "tsType": "Record<string, string | number | boolean>",
            "id": "#appConfig/icon/attrs",
            "default": {
              "aria-hidden": true
            },
            "type": "object"
          },
          "mode": {
            "title": "Default Rendering Mode",
            "description": "Set the default rendering mode for the icon component",
            "enum": [
              "css",
              "svg"
            ],
            "tags": [
              "@studioIcon material-symbols:move-down-rounded"
            ],
            "id": "#appConfig/icon/mode",
            "default": "css",
            "type": "string"
          },
          "aliases": {
            "title": "Icon aliases",
            "description": "Define Icon aliases to update them easily without code changes.",
            "tags": [
              "@studioIcon material-symbols:star-rounded"
            ],
            "tsType": "{ [alias: string]: string }",
            "id": "#appConfig/icon/aliases",
            "default": {},
            "type": "object"
          },
          "cssSelectorPrefix": {
            "title": "CSS Selector Prefix",
            "description": "Set the default CSS selector prefix.",
            "tags": [
              "@studioIcon material-symbols:format-textdirection-l-to-r"
            ],
            "id": "#appConfig/icon/cssSelectorPrefix",
            "default": "i-",
            "type": "string"
          },
          "cssLayer": {
            "title": "CSS Layer Name",
            "description": "Set the default CSS `@layer` name.",
            "tags": [
              "@studioIcon material-symbols:layers"
            ],
            "tsType": "string | undefined",
            "id": "#appConfig/icon/cssLayer",
            "default": {},
            "type": "any"
          },
          "cssWherePseudo": {
            "title": "Use CSS `:where()` Pseudo Selector",
            "description": "Use CSS `:where()` pseudo selector to reduce specificity.",
            "tags": [
              "@studioIcon material-symbols:low-priority"
            ],
            "id": "#appConfig/icon/cssWherePseudo",
            "default": true,
            "type": "boolean"
          },
          "collections": {
            "title": "Icon Collections",
            "description": "List of known icon collections name. Used to resolve collection name ambiguity.\ne.g. `simple-icons-github` -> `simple-icons:github` instead of `simple:icons-github`\n\nWhen not provided, will use the full Iconify collection list.",
            "tags": [
              "@studioIcon material-symbols:format-list-bulleted"
            ],
            "tsType": "string[] | null",
            "id": "#appConfig/icon/collections",
            "default": null,
            "type": "any"
          },
          "customCollections": {
            "title": "Custom Icon Collections",
            "tags": [
              "@studioIcon material-symbols:format-list-bulleted"
            ],
            "tsType": "string[] | null",
            "id": "#appConfig/icon/customCollections",
            "default": null,
            "type": "any"
          },
          "provider": {
            "title": "Icon Provider",
            "description": "Provider to use for fetching icons\n\n- `server` - Fetch icons with a server handler\n- `iconify` - Fetch icons with Iconify API, purely client-side\n- `none` - Do not fetch icons (use client bundle only)\n\n`server` by default; `iconify` when `ssr: false`",
            "enum": [
              "server",
              "iconify",
              "none"
            ],
            "tags": [
              "@studioIcon material-symbols:cloud"
            ],
            "type": "\"server\" | \"iconify\" | undefined",
            "id": "#appConfig/icon/provider"
          },
          "iconifyApiEndpoint": {
            "title": "Iconify API Endpoint URL",
            "description": "Define a custom Iconify API endpoint URL. Useful if you want to use a self-hosted Iconify API. Learn more: https://iconify.design/docs/api.",
            "tags": [
              "@studioIcon material-symbols:api"
            ],
            "id": "#appConfig/icon/iconifyApiEndpoint",
            "default": "https://api.iconify.design",
            "type": "string"
          },
          "fallbackToApi": {
            "title": "Fallback to Iconify API",
            "description": "Fallback to Iconify API if server provider fails to found the collection.",
            "tags": [
              "@studioIcon material-symbols:public"
            ],
            "enum": [
              true,
              false,
              "server-only",
              "client-only"
            ],
            "type": "boolean | \"server-only\" | \"client-only\"",
            "id": "#appConfig/icon/fallbackToApi",
            "default": true
          },
          "localApiEndpoint": {
            "title": "Local API Endpoint Path",
            "description": "Define a custom path for the local API endpoint.",
            "tags": [
              "@studioIcon material-symbols:api"
            ],
            "id": "#appConfig/icon/localApiEndpoint",
            "default": "/api/_nuxt_icon",
            "type": "string"
          },
          "fetchTimeout": {
            "title": "Fetch Timeout",
            "description": "Set the timeout for fetching icons.",
            "tags": [
              "@studioIcon material-symbols:timer"
            ],
            "id": "#appConfig/icon/fetchTimeout",
            "default": 1500,
            "type": "number"
          },
          "customize": {
            "title": "Customize callback",
            "description": "Customize icon content (replace stroke-width, colors, etc...).",
            "tags": [
              "@studioIcon material-symbols:edit"
            ],
            "type": "IconifyIconCustomizeCallback",
            "id": "#appConfig/icon/customize"
          }
        },
        "type": "object",
        "default": {
          "size": {},
          "class": "",
          "attrs": {
            "aria-hidden": true
          },
          "mode": "css",
          "aliases": {},
          "cssSelectorPrefix": "i-",
          "cssLayer": {},
          "cssWherePseudo": true,
          "collections": null,
          "customCollections": null,
          "iconifyApiEndpoint": "https://api.iconify.design",
          "fallbackToApi": true,
          "localApiEndpoint": "/api/_nuxt_icon",
          "fetchTimeout": 1500
        }
      },
      "global": {
        "title": "Website",
        "description": "Global website configuration",
        "tags": [
          "@previewIcon lucide:settings"
        ],
        "id": "#appConfig/global",
        "properties": {
          "meetingLink": {
            "type": "string",
            "title": "Meeting link",
            "description": "Your meeting link.",
            "default": "https://schedule.rdv.fr",
            "tags": [
              "@previewInput string",
              "@previewIcon lucide:calendar"
            ],
            "id": "#appConfig/global/meetingLink"
          },
          "available": {
            "type": "boolean",
            "title": "Available",
            "description": "Your availability.",
            "default": true,
            "tags": [
              "@previewInput boolean",
              "@previewIcon lucide:check"
            ],
            "id": "#appConfig/global/available"
          }
        },
        "type": "object",
        "default": {
          "meetingLink": "https://schedule.rdv.fr",
          "available": true
        }
      },
      "profile": {
        "title": "Personal information",
        "description": "Personal information configuration",
        "tags": [
          "@previewIcon lucide:user"
        ],
        "id": "#appConfig/profile",
        "properties": {
          "name": {
            "type": "string",
            "title": "Name",
            "description": "Your name.",
            "default": "Hugo Richard",
            "tags": [
              "@previewInput string",
              "@previewIcon lucide:user"
            ],
            "id": "#appConfig/profile/name"
          },
          "job": {
            "type": "string",
            "title": "Job",
            "description": "Your job.",
            "default": "Front-end developer",
            "tags": [
              "@previewInput string",
              "@previewIcon lucide:briefcase"
            ],
            "id": "#appConfig/profile/job"
          },
          "email": {
            "type": "string",
            "title": "Email",
            "description": "Your email.",
            "default": "contact@hrcd.fr",
            "tags": [
              "@previewInput string",
              "@previewIcon lucide:mail"
            ],
            "id": "#appConfig/profile/email"
          },
          "phone": {
            "type": "string",
            "title": "Phone",
            "description": "Your phone.",
            "default": "(+33) 6 21 56 22 18",
            "tags": [
              "@previewInput string",
              "@previewIcon lucide:phone"
            ],
            "id": "#appConfig/profile/phone"
          },
          "picture": {
            "type": "string",
            "title": "Picture",
            "description": "Your picture.",
            "default": "https://avatars.githubusercontent.com/u/71938701?v=4",
            "tags": [
              "@previewInput string",
              "@previewIcon lucide:image"
            ],
            "id": "#appConfig/profile/picture"
          }
        },
        "type": "object",
        "default": {
          "name": "Hugo Richard",
          "job": "Front-end developer",
          "email": "contact@hrcd.fr",
          "phone": "(+33) 6 21 56 22 18",
          "picture": "https://avatars.githubusercontent.com/u/71938701?v=4"
        }
      },
      "seo": {
        "title": "SEO",
        "description": "SEO configuration",
        "tags": [
          "@previewIcon lucide:search"
        ],
        "id": "#appConfig/seo",
        "properties": {
          "title": {
            "type": "string",
            "title": "Title",
            "description": "Title of your website (used in the preview of your website).",
            "default": "My website",
            "tags": [
              "@previewInput string",
              "@previewIcon lucide:title"
            ],
            "id": "#appConfig/seo/title"
          },
          "description": {
            "type": "string",
            "title": "Description",
            "description": "Description of your website (used in the preview of your website).",
            "default": "My website description",
            "tags": [
              "@previewInput string",
              "@previewIcon lucide:description"
            ],
            "id": "#appConfig/seo/description"
          },
          "url": {
            "type": "string",
            "title": "URL",
            "description": "Public URL of your website.",
            "default": "https://mywebsite.com",
            "tags": [
              "@previewInput string",
              "@previewIcon lucide:link"
            ],
            "id": "#appConfig/seo/url"
          },
          "lang": {
            "type": "string",
            "title": "Language",
            "description": "The language that you want to use for your website.",
            "default": "en",
            "required": [
              "en",
              "fr"
            ],
            "tags": [
              "@previewInput string",
              "@previewIcon lucide:language"
            ],
            "id": "#appConfig/seo/lang"
          }
        },
        "type": "object",
        "default": {
          "title": "My website",
          "description": "My website description",
          "url": "https://mywebsite.com",
          "lang": "en"
        }
      },
      "socials": {
        "title": "Socials",
        "description": "Socials configuration",
        "tags": [
          "@previewIcon lucide:link"
        ],
        "id": "#appConfig/socials",
        "properties": {
          "github": {
            "type": "string",
            "title": "Github",
            "description": "Your Github account.",
            "default": "https://github.com/myusername",
            "tags": [
              "@previewInput string",
              "@previewIcon lucide:github"
            ],
            "id": "#appConfig/socials/github"
          },
          "twitter": {
            "type": "string",
            "title": "Twitter",
            "description": "Your Twitter account.",
            "default": "https://twitter.com/myusername",
            "tags": [
              "@previewInput string",
              "@previewIcon lucide:twitter"
            ],
            "id": "#appConfig/socials/twitter"
          },
          "linkedin": {
            "type": "string",
            "title": "Linkedin",
            "description": "Your Linkedin account.",
            "default": "https://www.linkedin.com/in/myusername",
            "tags": [
              "@previewInput string",
              "@previewIcon lucide:linkedin"
            ],
            "id": "#appConfig/socials/linkedin"
          },
          "instagram": {
            "type": "string",
            "title": "Instagram",
            "description": "Your Instagram account.",
            "default": "https://www.instagram.com/myusername",
            "tags": [
              "@previewInput string",
              "@previewIcon lucide:instagram"
            ],
            "id": "#appConfig/socials/instagram"
          },
          "spotify": {
            "type": "string",
            "title": "Spotify",
            "description": "Your Spotify account.",
            "default": "https://open.spotify.com/user/myusername",
            "tags": [
              "@previewInput string",
              "@previewIcon lucide:spotify"
            ],
            "id": "#appConfig/socials/spotify"
          }
        },
        "type": "object",
        "default": {
          "github": "https://github.com/myusername",
          "twitter": "https://twitter.com/myusername",
          "linkedin": "https://www.linkedin.com/in/myusername",
          "instagram": "https://www.instagram.com/myusername",
          "spotify": "https://open.spotify.com/user/myusername"
        }
      }
    },
    "type": "object",
    "default": {
      "icon": {
        "size": {},
        "class": "",
        "attrs": {
          "aria-hidden": true
        },
        "mode": "css",
        "aliases": {},
        "cssSelectorPrefix": "i-",
        "cssLayer": {},
        "cssWherePseudo": true,
        "collections": null,
        "customCollections": null,
        "iconifyApiEndpoint": "https://api.iconify.design",
        "fallbackToApi": true,
        "localApiEndpoint": "/api/_nuxt_icon",
        "fetchTimeout": 1500
      },
      "global": {
        "meetingLink": "https://schedule.rdv.fr",
        "available": true
      },
      "profile": {
        "name": "Hugo Richard",
        "job": "Front-end developer",
        "email": "contact@hrcd.fr",
        "phone": "(+33) 6 21 56 22 18",
        "picture": "https://avatars.githubusercontent.com/u/71938701?v=4"
      },
      "seo": {
        "title": "My website",
        "description": "My website description",
        "url": "https://mywebsite.com",
        "lang": "en"
      },
      "socials": {
        "github": "https://github.com/myusername",
        "twitter": "https://twitter.com/myusername",
        "linkedin": "https://www.linkedin.com/in/myusername",
        "instagram": "https://www.instagram.com/myusername",
        "spotify": "https://open.spotify.com/user/myusername"
      }
    }
  },
  "default": {
    "icon": {
      "size": {},
      "class": "",
      "attrs": {
        "aria-hidden": true
      },
      "mode": "css",
      "aliases": {},
      "cssSelectorPrefix": "i-",
      "cssLayer": {},
      "cssWherePseudo": true,
      "collections": null,
      "customCollections": null,
      "iconifyApiEndpoint": "https://api.iconify.design",
      "fallbackToApi": true,
      "localApiEndpoint": "/api/_nuxt_icon",
      "fetchTimeout": 1500
    },
    "global": {
      "meetingLink": "https://schedule.rdv.fr",
      "available": true
    },
    "profile": {
      "name": "Hugo Richard",
      "job": "Front-end developer",
      "email": "contact@hrcd.fr",
      "phone": "(+33) 6 21 56 22 18",
      "picture": "https://avatars.githubusercontent.com/u/71938701?v=4"
    },
    "seo": {
      "title": "My website",
      "description": "My website description",
      "url": "https://mywebsite.com",
      "lang": "en"
    },
    "socials": {
      "github": "https://github.com/myusername",
      "twitter": "https://twitter.com/myusername",
      "linkedin": "https://www.linkedin.com/in/myusername",
      "instagram": "https://www.instagram.com/myusername",
      "spotify": "https://open.spotify.com/user/myusername"
    }
  }
}