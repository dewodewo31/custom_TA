{
    'name': 'Trinity Page',
    'version': '1.0',
    'summary': 'Trinity Auto Web Page',
    'description': 'Web Design Development',
    'category': 'Website',
    'author': 'Kurnia Dewanto',
    'depends': ['website'],
    'data': [
        'views/assets.xml',  # File untuk mengelola asset tambahan
        'views/home/home.xml',  # Template untuk halaman utama
        'views/car/car.xml', 
        'views/he/he.xml', 
    ],
    'qweb': [],  # Jika ada QWeb template tambahan, masukkan di sini
    'installable': True,
    'application': True,
    'license': 'LGPL-3',
    'assets': {
        'web.assets_frontend': [
            'custom_TA/static/src/css/style.css'
            
        ],
    },
}
