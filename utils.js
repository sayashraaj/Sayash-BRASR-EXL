function tsp_main(dist, arr) {
  //dist and arr are predefined
  // console.log(dist);
  // console.log(arr);

  const INT_MAX = 100000

  // dist=
  // [
  //     [0, 1, 1],
  //     [1, 0, 1],
  //     [1, 1, 0]
  // ];
  // arr=
  // [
  //     [0, 3, 0],
  //     [1, 1, 0],
  //     [1, 2, 0]
  // ];

  console.log(dist);
  console.log(arr);
  function tsp(vis_mask, skipped_mask, pos, ssf, total){
      // cout<<pos<<" "<<ssf<<" "<<total<<" "<<vis_mask<<" "<<skipped_mask<<endl;
      // console.log(pos, ssf, total, vis_mask, skipped_mask);
      // console.log('\n')
      let n=dist.length;
      if(vis_mask==((1<<n)-1)){
          if(skipped_mask==0){
              total+=ssf+dist[pos][0];
              return total;
          }
          else{
              vis_mask=vis_mask^skipped_mask;
              skipped_mask=0;
              // skipped_mask=0x00000000000000000000000000000000;
              total+=ssf+dist[pos][0];
              ssf=0;
              vis_mask^= (1<<0); //setting vis(home)=0
              return tsp(vis_mask, skipped_mask, 0, 0, total);
          }
      }
      
      let ans=INT_MAX;
      for(let i=0;i<n;i++){
          let ssf1=ssf+dist[pos][i];
          
          if((vis_mask&(1<<i))==0){
              let z=arr[i][2], start=arr[i][0], end=arr[i][1];
              if(ssf1+z>end){
                  skipped_mask|=(1<<i);
                  vis_mask|=(1<<i);
                  // cout<<vis_mask<<" "<<skipped_mask<<endl;
              }
              else{
                  if(start>=ssf1) ssf1+=z+(start-ssf1);
                  else ssf1+=z;
                  ans=Math.min(ans, tsp(vis_mask|(1<<i),skipped_mask,i,ssf1,total));
              }
          }
      }
      if(ans==INT_MAX){
          if(skipped_mask==0) return ans;
          vis_mask=vis_mask^skipped_mask;
          skipped_mask=0;
          // skipped_mask=0x00000000000000000000000000000000;
          total+=ssf+dist[pos][0];
          ssf=0;
          vis_mask^= (1<<0); //setting vis(home)=0
          ans=tsp(vis_mask, skipped_mask, 0, 0, total);
      }
      return ans;
  }
      
     // const ans=tsp(1,0,0,0,0); 
  const ans=tsp(0x00000000000000000000000000000001,0x00000000000000000000000000000000,0,0,0);
  return ans;
}

function tsp_main1(dist, arr) {
  //dist and arr are predefined
  // console.log(dist);
  // console.log(arr);

  const INT_MAX = 100000

  // dist=
  // [
  //     [0, 1, 1],
  //     [1, 0, 1],
  //     [1, 1, 0]
  // ];
  // arr=
  // [
  //     [0, 3, 0],
  //     [1, 1, 0],
  //     [1, 2, 0]
  // ];

  console.log(dist);
  console.log(arr);
  let ans_obj={
    int: INT_MAX,
    vec: null
  }
  function tsp(vis_mask, skipped_mask, pos, ssf, total, day, min_vec){
      // cout<<pos<<" "<<ssf<<" "<<total<<" "<<vis_mask<<" "<<skipped_mask<<endl;
      console.log(pos, ssf, total, vis_mask, skipped_mask);
      // console.log('\n')
      // min_vec.push({
      //   day,
      //   pos,
      //   ssf,
      //   total,
      //   vis_mask,
      //   skipped_mask,
      // });
      let n=dist.length;
      if(vis_mask==((1<<n)-1)){
          if(skipped_mask==0){
              ssf+=dist[pos][0];
              total+=ssf;
              //
              //
              const min_vec1 = [...min_vec, {
                day,
                pos,
                ssf,
                total,
                vis_mask,
                skipped_mask,
              }];
              //


              if(ans_obj.int > total){
                ans_obj = {
                  int: total,
                  vec: min_vec1
                }
              }
              //
              return total;
          }
          else{
              //
              const min_vec1 = [...min_vec, {
                day,
                pos,
                ssf,
                total,
                vis_mask,
                skipped_mask,
              }];
              //
              vis_mask=vis_mask^skipped_mask;
              skipped_mask=0;
              total+=ssf+dist[pos][0];
              ssf=0;
              // vis_mask^= (1<<0); //setting vis(home)=0
              vis_mask|=1

              return tsp(vis_mask, skipped_mask, 0, 0, total, day+1, min_vec1);
          }
      }
      
      let ans=INT_MAX;
      for(let i=0;i<n;i++){
          let ssf1=ssf+dist[pos][i];
          
          if((vis_mask&(1<<i))==0){
              let z=arr[i][2], start=arr[i][0], end=arr[i][1];
              if(ssf1+z>end){
                  skipped_mask|=(1<<i);
                  vis_mask|=(1<<i);
                  // cout<<vis_mask<<" "<<skipped_mask<<endl;
              }
              else{
                  if(start>=ssf1) ssf1+=z+(start-ssf1);
                  else ssf1+=z;

                  //
                  const vis_mask1=vis_mask|(1<<i)
                  const min_vec1 = [...min_vec, {
                    day,
                    pos,
                    ssf1,
                    total,
                    vis_mask1,
                    skipped_mask,
                  }];
                  //
                  ans=Math.min(ans, tsp(vis_mask|(1<<i),skipped_mask,i,ssf1,total, day, min_vec1));
              }
          }
      }
      if(ans==INT_MAX){
          if(skipped_mask==0) return ans;
          vis_mask=vis_mask^skipped_mask;
          skipped_mask=0;
          // skipped_mask=0x00000000000000000000000000000000;
          ssf+=dist[pos][0];
          total+=ssf;
          ssf=0;
          // vis_mask^= (1<<0); //setting vis(home)=0
          vis_mask|=1

          //
              const min_vec1 = [...min_vec, {
                day,
                pos,
                ssf,
                total,
                vis_mask,
                skipped_mask,
              }];
              //


          ans=tsp(vis_mask, skipped_mask, 0, 0, total, day+1, min_vec1);
      }
      return ans;
  }
      
     // const ans=tsp(1,0,0,0,0); 
  const ans=tsp(0x00000000000000000000000000000001,0x00000000000000000000000000000000,0,0,0,0,[]);
  // console.log(ans_obj);
  return {ans, vec: ans_obj.vec};
}

module.exports = {
  tsp_main, 
  tsp_main1
}