To set up the required cron job to poll the pihole status once per minute:

$ sudo crontab -e

Then add

```
* * * * * /home/pi/git/pihole-control/check-status.sh > /dev/null 2>&1

```

