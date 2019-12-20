import requests
from bs4 import BeautifulSoup
page = requests.get('https://stats.nba.com/game/0021900352/')
soup = BeautifulSoup(page.text,"html.parser")
stats = soup.find_all('script')
arrayStats = stats[0].find("window.nbaStatsLineScore")
print("Hello World")
#print(soup.prettify())
print(stats)
print(arrayStats)
#print(soup.find(class_='stats-scores-page'))