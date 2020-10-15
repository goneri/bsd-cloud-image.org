#!/bin/bash

find . -type f -not -path '*/\.*' -not -path './push.sh' -exec openstack object create bsd-cloud-image.org '{}' \;
