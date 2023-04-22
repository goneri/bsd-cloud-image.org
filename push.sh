#!/bin/bash

find icons -exec openstack object create bsd-cloud-image.org '{}' \;
openstack object create bsd-cloud-image.org index.html
openstack object create bsd-cloud-image.org CNAME
openstack object create bsd-cloud-image.org album.css
