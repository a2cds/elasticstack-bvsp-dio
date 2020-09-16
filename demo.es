GET _cat/indices

GET bvsp-2020.09.12/_count

GET bvsp-2020.09.12/_search?size=6953
{
  "query": {
    "match_all": {}
  }
}

GET bvsp-2020.09.12/_search
{
  "size": 5000,
  "query": {
    "bool": {
      "must": [
        {
          "range": {
            "data": {
              "from": "2010-01-01",
              "to": "2030-12-01",
              "include_lower": true,
              "include_upper": true,
              "format": "yyyy-MM-dd",
              "boost": 1.0
            }
          }
        }
      ],
      "adjust_pure_negative": true,
      "boost": 1.0
    }
  }
}
