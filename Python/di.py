class Database:
    def get_users(self):
        return ["Alice", "Bob"]

class UserService:
    def __init__(self, db):   # dependency injected ✅
        self.db = db

    def list_users(self):
        return self.db.get_users()


db = Database()
service = UserService(db)   # injecting dependency

print(service.list_users())