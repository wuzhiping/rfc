FROM shawoo/node:edge

WORKDIR /opt/bpm

RUN mkdir -p /usr/local/sap/nwrfcsdk
ENV SAPNWRFC_HOME /usr/local/sap/nwrfcsdk
COPY nwrfcsdk/ /usr/local/sap/nwrfcsdk/
COPY nwrfcsdk.conf  /etc/ld.so.conf.d/nwrfcsdk.conf
RUN ldconfig -p | grep sap

RUN npm install node-rfc --loglevel verbose

ENV LD_LIBRARY_PATH /usr/local/sap/nwrfcsdk/lib

RUN npm install @dapr/dapr@3.0.0 @supabase/postgrest-js
