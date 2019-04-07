import Axios from 'axios'
const userToken =
  'v^1.1#i^1#r^0#I^3#p^1#f^0#t^H4sIAAAAAAAAAOVXXWwUVRTe7R9toFYTIw0QWaZIKrCzd3Z3tjsju2HbAl0C/WFXAhWsd2bu0LGzM+PMHdr1wSxFUcHECPHF+FMQY4rBBPxJVHzACMREMDExEh6sCggqCcZERUzEO7NL2VYCFBYhcV9259wz557v+845dy/IVdXM3dS26Y9a76SyoRzIlXm9zGRQU1U5747ysmmVHlDk4B3Kzc5VDJafXmDBjGrwK5Bl6JqFfAMZVbN41xijbFPjdWgpFq/BDLJ4LPKpxPJlfJAGvGHqWBd1lfIlW2OUEBFZDjWFAQzCYETgiFW7GDOtx6ioCGTISoCVIiwbDSOyblk2SmoWhhqOUUHAcH4Q9oOmNOD4MMODIB3huG7KtxKZlqJrxIUGVNxNl3ffNYtyvXKq0LKQiUkQKp5MLE51JJKti9rTCwJFseIFHlIYYtsa+9SiS8i3Eqo2uvI2luvNp2xRRJZFBeL5HcYG5RMXk7mO9F2qIxHIymwIhjiOYRlRKAmVi3UzA/GV83AsiuSXXVceaVjB2asxStgQHkUiLjy1kxDJVp/z1WVDVZEVZMaoRc2J1YnOTireC8U+jMRe/+iPzhWtfpmJSIiNCBF/lIUEtigXNspHK9A8bqcWXZMUhzTL167jZkSyRuO5CRVxQ5w6tA4zIWMnoyI/hhnlkO12RM2raONezdEVZQgRPvfx6gqMvo2xqQg2RqMRxi+4FMUoaBiKRI1fdGuxUD4DVozqxdjgA4H+/n66P0Tr5rpAEAAmsGr5spTYizKQIr5Or+f9lau/4FdcKCJpU+LP46xBchkgtUoS0NZR8VCUZbhggfexacXHW/9lKMIcGNsRpeoQRmBZJkrGUJCRJbkkDRIv1GjASQMJMOvPQLMPYUOFIvKLpMzsDDIViQ+xcjAUlZFfinCyP8zJsl8gQ8/PyAgBhARB5KL/pz651kpPibqBOnVVEbMlqffS1bopdUITZ1NIVYnhWov+siAtB+TNh+f0+kQgOjEsEgQaCu3UNi3qmYAOyUxzTD1u1jeEO2EYyUzGxlBQUbI08+wWzbLLwlPIaX9bYSL65YVUpPwxTbtq0tZ6kTaRpdsm+YdCdzinVlrvQxoZAtjUVRWZK5kbFvo203eCs/L6cJfunJ4obtLrzM2sbVFVSAn13CJ0t1ZVBeLbCzXDsuFICIDIjWna4mqazv4XZ9FE4LXpFkbSTfhbGRh7yY173A8z6H0PDHr3kHsyCID7mAYwq6r8wYryKdMsBSNagTJtKes0cnczEd2HsgZUzLIqr7L1y6e/KrpWD60F9aMX65pyZnLRLRvMuLRSydRNrWU4EAZNgAszINgNGi6tVjD3VNz9rucY99fxpp1PXJiz+/T+sr1vVM/cDmpHnbzeSk/FoNcDanKzKvZM2Tevs/qlgboz55v1JeyBXPr32LZzG6r3GWLjpN/qw1vBFuqLHRcGPxlZveLDn+s3bx86WPv2O/RjUw/+erpr2cLy8y+fXXpu89/24fanTn32OVV7omv18yO+bXv3XjgztPTU8UPP7ZxRNvmDk6uGzr+yZ/Mzq1o2vthy5OsTh1rfbPyx4ezDB9Y8ss9zsi7U2PMLbPMsPrtRr1Yadxl/vrX+G+7btrYnF25qeH3myaPcs4Pmd2vXDKcfnyr0vPb+/Bl37sjhuXO7TizZ8sC98+PHmhv318+ZmdpYZ05/SD14blj6qX73R/bRj4/Udr3QvmH6yP3aruHGkbsqu3d6X/1hePbshk/N708dzsv3Dz6pabXwEAAA'

// This obtains the user consent

export const axiosConfig = () => {
  return Axios.create({
    baseURL: 'https://api.ebay.com/buy/browse/v1',
    headers: {
      Authorization: `Bearer ${userToken}`,
      'Access-Control-Allow-Origin': '*'
    }
  })
}

export const getItems = async query => {
  const api = await axiosConfig()

  const splitQuery = query.split(' ')
  let joinedQuery = splitQuery.slice(0, 5).join(' ')

  return api
    .get('item_summary/search', {
      params: {
        q: `${query}`
      }
    })
    .then(r => r.data)
}
