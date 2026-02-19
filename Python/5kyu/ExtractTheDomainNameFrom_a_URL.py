# Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

# * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
# * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
# * url = "https://www.cnet.com


from urllib.parse import urlparse
def domain_name(url):
    
    parsed = urlparse(url)
    
    host = parsed.netloc or parsed.path
    
    if host.startswith("www."):
        host = host[4:]
        
    return host.split(".")[0]
