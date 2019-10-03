const path = require('path')
const { parseString } = require('xml2js')
const fs = require('fs')
const xml2js = require('xml2js')

fs.readFile(path.resolve('../../dist/sitemap.xml'), "utf-8", function(err, data) {
    if(err) {
        return false
    } else {
        parseString(data, (err, result) => {
            if(!err) {
                const urls = result.urlset.url
                const updatedUrls = urls.map(urlObj => {
                    if(!urlObj.loc[0].endsWith('/')) {
                        urlObj.loc[0] = `${urlObj.loc[0]}/`
                        return urlObj
                    } else {
                        return urlObj
                    }
                })
                let newObj = result
                newObj.urlset.url = updatedUrls
                buildNewSiteMap(newObj)
            }
        })
    }
})

function buildNewSiteMap(obj) {
    var builder = new xml2js.Builder({renderOpts:{ 'pretty': true, 'indent': ' ', 'newline': '\n' }})
    var xml = builder.buildObject(obj)
    updateSitemapFile(xml)
}

function updateSitemapFile(xml) {
    const filePath = path.resolve('../../dist/sitemap.xml')
    fs.writeFile(filePath, xml, function(err) {
        if(err) {
            return console.log(err)
        }
    
        console.log("The file was saved!")
    }) 
}