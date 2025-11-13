from flask import Flask,jsonify
from flask_cors import CORS
import mysql.connector

app=Flask(__name__)
CORS(app)

def get_db_connection():
    return mysql.connector.connect(
        host='localhost',
        user="root",
        password="Raji@1977",
        database="Information"
    )


@app.route('/Customers',methods=['GET'])
def get_Customers():
    conn=get_db_connection()
    cursor=conn.cursor(dictionary=True)
    cursor.execute('select * from Customers')
    Customers=cursor.fetchall()
    cursor.close()
    conn.close()
    return jsonify(Customers)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)
