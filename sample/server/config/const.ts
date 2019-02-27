module.exports = {
    dubbo: {
        testjd: 'kaola-test-dubbozk01.v1.kaola.jdb.vpc:2181,kaola-test-dubbozk02.v1.kaola.jdb.vpc:2181,kaola-test-dubbozk03.v1.kaola.jdb.vpc:2181',
        onlinejd: 'kaola-soa-zk1.jd.163.org:2181,backup=kaola-soa-zk2.jd.163.org:2181,kaola-soa-zk3.jd.163.org:2181,kaola-soa-zk4.jd.163.org:2181,kaola-soa-zk5.jd.163.org:2181'
    },
    disconf: {
        testjd: 'kaola-test6.v1.kaola.jdb.vpc:2181,kaola-test7.v1.kaola.jdb.vpc:2181,kaola-test8.v1.kaola.jdb.vpc:2181',
        onlinejd: 'kaola-disconf-zk-online11.v1.kaola.jd1.vpc:2181,kaola-disconf-zk-online12.v1.kaola.jd1.vpc:2181,kaola-disconf-zk-online13.v1.kaola.jd1.vpc:2181,kaola-disconf-zk-online14.v1.kaola.jd1.vpc:2181,kaola-disconf-zk-online15.v1.kaola.jd1.vpc:2181'
    },
    nodePort: 3033,
    mockPort: 3022
};