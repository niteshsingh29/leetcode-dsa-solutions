////////////////////////////////////// C++ codechef leetcode contest solutions ////////////////////////////////////////

// 1
class Solution {
public:
    vector<string> sortPeople(vector<string>& names, vector<int>& heights) {
        vector<pair<int,string>>v;
    int n = names.size();
    
    for (int i=0; i<n; i++){
        v.push_back({heights[i],names[i]});
    }
    
    sort(v.rbegin(),v.rend());
    
    for(int i=0; i<n; i++) {
        names[i] = v[i].second;
    }
    
    return names;

    }
};

// strings
void findAns() {
    int n;
    cin >> n;
    string str;
    cin >> str;
    
    int mid = n/2;
    int last = n;
    int start = 0;
    char temp;
    bool flag;
    
    vector<char> ar; 
    
    for (int i=0; i<n; i++) {
        ar.emplace_back(str[i]);
    }
    
    // Declaring iterator to a vector
    vector<char>::iterator ptr = ar.begin();
    
    advance(ptr, mid);
    
    reverse(ptr, ar.end());
    
    while(start<last) {
        if(ar[start] == ar[last-1]) {
            flag = true;
        } else {
            flag = false;
            break;
        }
        
        start++;
        last--;
    }
    
    if(!flag) {
        cout << "NO" << endl;
    } else {
        cout << "YES" << endl;
    }
        
}
int main() {
	// your code goes here
	int tc;
	cin >> tc;
	while (tc--) 
	{
	    findAns();
	}
	return 0;
}